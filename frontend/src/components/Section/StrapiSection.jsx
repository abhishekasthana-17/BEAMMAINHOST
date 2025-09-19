import React from "react";
import Section from "./Section";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

/**
 * A "dumb" component that receives its content directly via props from a parent component (like StrapiPage).
 * It is responsible for rendering the section based on the provided content.
 */
const StrapiSection = ({ defaultContent }) => {
  if (!defaultContent) {
    return <div className="error">Section content is missing.</div>;
  }

  // Helper function to process rich text blocks from Strapi into JSX
  const processRichText = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) {
      return null;
    }

    const processTextChildren = (children) =>
      children.map((child, childIndex) => {
        if (child.type === "link") {
          return (
            <a
              key={childIndex}
              href={child.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child.children.map((linkChild, linkChildIndex) => {
                let linkElement = (
                  <React.Fragment key={linkChildIndex}>
                    {linkChild.text}
                  </React.Fragment>
                );
                if (linkChild.bold)
                  linkElement = <strong>{linkElement}</strong>;
                if (linkChild.italic) linkElement = <em>{linkElement}</em>;
                if (linkChild.underline) linkElement = <u>{linkElement}</u>;
                if (linkChild.strikethrough) linkElement = <s>{linkElement}</s>;
                return linkElement;
              })}
            </a>
          );
        }

        let element = (
          <React.Fragment key={childIndex}>{child.text}</React.Fragment>
        );
        if (child.bold) element = <strong>{element}</strong>;
        if (child.italic) element = <em>{element}</em>;
        if (child.underline) element = <u>{element}</u>;
        if (child.strikethrough) element = <s>{element}</s>;
        return element;
      });

    return blocks.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return <p key={index}>{processTextChildren(block.children)}</p>;
        case "list": {
          const ListTag = block.format === "ordered" ? "ol" : "ul";
          return (
            <ListTag key={index}>
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  {processTextChildren(listItem.children)}
                </li>
              ))}
            </ListTag>
          );
        }
        case "heading": {
          const HeadingTag = `h${block.level}`;
          return (
            <HeadingTag key={index}>
              {processTextChildren(block.children)}
            </HeadingTag>
          );
        }
        default:
          return (
            <p key={index}>
              {block.children?.map((child) => child.text).join("") || ""}
            </p>
          );
      }
    });
  };

  // Strapi v4 returns image data within a 'data.attributes' object.
  let imageUrl = null;
  let imageAltText = defaultContent.imageAlt || "Section image";

  if (defaultContent.image && defaultContent.image.data) {
    const { url, alternativeText, name } = defaultContent.image.data.attributes;
    imageUrl = url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    imageAltText =
      alternativeText || defaultContent.imageAlt || name || "Section image";
  }

  // Process content - handle both rich text blocks and plain text
  const processContent = (content) => {
    if (!content) return "";

    // If content is a string, split by newlines and create paragraphs
    if (typeof content === "string") {
      return content
        .split("\n\n")
        .map((paragraph, index) => (
          <p key={index}>{paragraph.replace(/\n/g, " ")}</p>
        ));
    }

    // If content is rich text blocks, use the rich text processor
    if (Array.isArray(content)) {
      return processRichText(content);
    }

    return content;
  };

  // Build section props from the defaultContent
  const sectionProps = {
    title: defaultContent.title || "",
    subtitle: defaultContent.subtitle || "",
    description: processContent(defaultContent.content),
    image: imageUrl,
    imageAlt: imageAltText,
    imagePosition: defaultContent.imagePosition,
    backgroundColor: defaultContent.backgroundColor,
    buttons: defaultContent.buttons,
    // Add any other props you need to pass down to the Section component
  };

  return <Section {...sectionProps} />;
};

export default StrapiSection;
