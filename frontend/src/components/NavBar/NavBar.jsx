import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css"; // Use NavBar styles
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_beam.png";
import googlePlay from "../../assets/icons/logo_google_play.png";
import appStore from "../../assets/icons/logo_app_store.png";
import strapiService from "../../utils/strapiService"; // Import strapiService

// Helper function to build the navigation hierarchy
const buildHierarchy = (items, parentId = null) => {
  return (
    items
      .filter((item) =>
        item.parent ? item.parent.id === parentId : parentId === null
      )
      .map((item) => ({
        ...item,
        // Ensure items property is initialized as an empty array for type consistency
        // Recursively build children, ensuring sub-items also get an initialized 'items' array
        items: buildHierarchy(items, item.id) || [],
      }))
      // Optional: Sort items by their 'order' property if it exists
      .sort((a, b) => (a.order || 0) - (b.order || 0))
  );
};

const NavBar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track which mobile submenu is open
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  // State for navigation items
  const [navItems, setNavItems] = useState([]);

  // Fallback navigation structure
  const fallbackNavItems = [
    { id: 1, title: "About Us", path: "/about-us", type: "INTERNAL" },
    { id: 2, title: "Careers", path: "/careers", type: "INTERNAL" },
    { id: 3, title: "Investors", path: "/investors", type: "INTERNAL" },
    { id: 4, title: "Contacts", path: "/contacts", type: "INTERNAL" },
  ];

  useEffect(() => {
    const fetchNav = async () => {
      try {
        const flatNavData = await strapiService.getNavigation();

        if (flatNavData && Array.isArray(flatNavData)) {
          const structuredNavItems = buildHierarchy(flatNavData);
          setNavItems(structuredNavItems);
        } else if (
          flatNavData &&
          flatNavData.data &&
          Array.isArray(flatNavData.data)
        ) {
          // This case might occur if the API wraps the array in a 'data' property
          const structuredNavItems = buildHierarchy(flatNavData.data);
          setNavItems(structuredNavItems);
        } else {
          setNavItems([]); // Set to empty array if format is unexpected
        }
      } catch (err) {
        console.error("Error fetching navigation:", err);
        setNavItems(fallbackNavItems); // Ensure navItems is an array on error
      }
    };

    fetchNav();
  }, []);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open submenu when closing the mobile menu
    if (isMobileMenuOpen) {
      // Note: logic flipped here, close when menu *was* open
      setActiveMobileSubmenu(null);
    }
  };

  // Close mobile menu (e.g., on link click)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  // Toggle mobile submenu visibility
  const toggleMobileSubmenu = (id, e) => {
    // If provided, prevent default behavior and stop propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // If it's the same ID, close it
    if (activeMobileSubmenu === id) {
      setActiveMobileSubmenu(null);
      return;
    }

    // Check if this is a parent menu or child menu
    // Convert id to string before using includes() method
    const idStr = String(id);
    if (idStr.includes("-")) {
      // This is a nested menu (contains a dash)
      // Keep it open even if parent menu changes
      setActiveMobileSubmenu(id);
    } else {
      // This is a top-level menu - close nested menus except when explicitly opening one
      setActiveMobileSubmenu(id);
    }
  };

  // Handle nested submenu click
  const handleNestedSubmenuClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    // Toggle the nested submenu
    if (activeMobileSubmenu === id) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(id);
    }
  };

  return (
    // Main navigation container (previously header)
    <header className={styles.navBar}>
      {" "}
      {/* Use navBar class */}
      <div className={styles.navBarContainer}>
        {" "}
        {/* Use navBarContainer class */}
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <img src={logo} alt="Beam Wallet Logo" />
        </Link>
        {/* Desktop Navigation menu */}
        <nav className={styles.nav} id="main-nav" aria-label="Main navigation">
          <ul className={styles.navMenu}>
            {navItems &&
              navItems.map((item) => {
                // Determine link path and type
                let path = "#";
                let isExternal = item.type === "EXTERNAL";
                let target = isExternal ? "_blank" : undefined;
                let rel = isExternal ? "noopener noreferrer" : undefined;

                if (
                  item.type === "INTERNAL" &&
                  item.related &&
                  item.related.slug
                ) {
                  path = `/${item.related.slug.trim()}`;
                } else if (item.type === "EXTERNAL" && item.externalPath) {
                  path = item.externalPath.trim();
                  if (
                    !path.startsWith("http://") &&
                    !path.startsWith("https://")
                  ) {
                    path = `https://${path}`;
                  }
                } else if (item.path) {
                  // For WRAPPER or manually entered paths (usually internal by convention here)
                  path = item.path.trim();
                  path = path.startsWith("/") ? path : `/${path}`;
                  // Heuristic for WRAPPERs that might have an absolute http path manually entered
                  if (
                    item.type === "WRAPPER" &&
                    (path.startsWith("http://") || path.startsWith("https://"))
                  ) {
                    isExternal = true; // Treat as external if it looks like a full URL
                    target = "_blank";
                    rel = "noopener noreferrer";
                  }
                }

                // Check for children to render a dropdown
                const hasSubmenu = item.items && item.items.length > 0;

                return (
                  <li key={item.id || item.title} className={styles.navItem}>
                    {hasSubmenu ? (
                      <>
                        <span className={styles.navLink}>
                          {item.title.toUpperCase()}
                          <i
                            className={`fa-solid fa-chevron-down ${styles.navArrow}`}
                          ></i>
                        </span>
                        <div className={styles.dropdown}>
                          <ul className={styles.dropdownMenu}>
                            {item.items.map((subItem) => {
                              let subPath = "#";
                              let subIsExternal = subItem.type === "EXTERNAL";
                              let subTarget = subIsExternal
                                ? "_blank"
                                : undefined;
                              let subRel = subIsExternal
                                ? "noopener noreferrer"
                                : undefined;

                              if (
                                subItem.type === "INTERNAL" &&
                                subItem.related &&
                                subItem.related.slug
                              ) {
                                subPath = `/${subItem.related.slug.trim()}`;
                              } else if (
                                subItem.type === "EXTERNAL" &&
                                subItem.externalPath
                              ) {
                                subPath = subItem.externalPath.trim();
                                if (
                                  !subPath.startsWith("http://") &&
                                  !subPath.startsWith("https://")
                                ) {
                                  subPath = `https://${subPath}`;
                                }
                              } else if (subItem.path) {
                                subPath = subItem.path.trim();
                                subPath = subPath.startsWith("/")
                                  ? subPath
                                  : `/${subPath}`;
                                if (
                                  subItem.type === "WRAPPER" &&
                                  (subPath.startsWith("http://") ||
                                    subPath.startsWith("https://"))
                                ) {
                                  subIsExternal = true;
                                  subTarget = "_blank";
                                  subRel = "noopener noreferrer";
                                }
                              }

                              const hasGrandchildren =
                                subItem.items && subItem.items.length > 0;

                              return (
                                <li
                                  key={subItem.id || subItem.title}
                                  className={`${styles.dropdownItem} ${
                                    hasGrandchildren ? styles.hasSubmenu : ""
                                  }`}
                                >
                                  {hasGrandchildren ? (
                                    <>
                                      <span
                                        className={styles.dropdownLinkTrigger}
                                      >
                                        {subItem.title.toUpperCase()}
                                        <i
                                          className={`fa-solid fa-chevron-right ${styles.submenuIndicator}`}
                                        ></i>
                                      </span>
                                      <div className={styles.submenu}>
                                        <ul className={styles.submenuMenu}>
                                          {subItem.items.map(
                                            (grandchildItem) => {
                                              let grandchildPath = "#";
                                              let grandchildIsExternal =
                                                grandchildItem.type ===
                                                "EXTERNAL";
                                              let grandchildTarget =
                                                grandchildIsExternal
                                                  ? "_blank"
                                                  : undefined;
                                              let grandchildRel =
                                                grandchildIsExternal
                                                  ? "noopener noreferrer"
                                                  : undefined;

                                              if (
                                                grandchildItem.type ===
                                                  "INTERNAL" &&
                                                grandchildItem.related &&
                                                grandchildItem.related.slug
                                              ) {
                                                grandchildPath = `/${grandchildItem.related.slug.trim()}`;
                                              } else if (
                                                grandchildItem.type ===
                                                  "EXTERNAL" &&
                                                grandchildItem.externalPath
                                              ) {
                                                grandchildPath =
                                                  grandchildItem.externalPath.trim();
                                                if (
                                                  !grandchildPath.startsWith(
                                                    "http://"
                                                  ) &&
                                                  !grandchildPath.startsWith(
                                                    "https://"
                                                  )
                                                ) {
                                                  grandchildPath = `https://${grandchildPath}`;
                                                }
                                              } else if (grandchildItem.path) {
                                                grandchildPath =
                                                  grandchildItem.path.trim();
                                                grandchildPath =
                                                  grandchildPath.startsWith("/")
                                                    ? grandchildPath
                                                    : `/${grandchildPath}`;
                                                if (
                                                  grandchildItem.type ===
                                                    "WRAPPER" &&
                                                  (grandchildPath.startsWith(
                                                    "http://"
                                                  ) ||
                                                    grandchildPath.startsWith(
                                                      "https://"
                                                    ))
                                                ) {
                                                  grandchildIsExternal = true;
                                                  grandchildTarget = "_blank";
                                                  grandchildRel =
                                                    "noopener noreferrer";
                                                }
                                              }

                                              return (
                                                <li
                                                  key={
                                                    grandchildItem.id ||
                                                    grandchildItem.title
                                                  }
                                                  className={styles.submenuItem}
                                                >
                                                  {grandchildIsExternal ? (
                                                    <a
                                                      href={grandchildPath}
                                                      className={
                                                        styles.submenuLink
                                                      }
                                                      target={grandchildTarget}
                                                      rel={grandchildRel}
                                                    >
                                                      {grandchildItem.title.toUpperCase()}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      to={grandchildPath}
                                                      className={
                                                        styles.submenuLink
                                                      }
                                                    >
                                                      {grandchildItem.title.toUpperCase()}
                                                    </Link>
                                                  )}
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    </>
                                  ) : subIsExternal ? (
                                    <a
                                      href={subPath}
                                      className={styles.dropdownLink}
                                      target={subTarget}
                                      rel={subRel}
                                    >
                                      {subItem.title.toUpperCase()}
                                    </a>
                                  ) : (
                                    <Link
                                      to={subPath}
                                      className={styles.dropdownLink}
                                    >
                                      {subItem.title.toUpperCase()}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : isExternal ? (
                      <a
                        href={path}
                        className={styles.navLink}
                        target={target}
                        rel={rel}
                      >
                        {item.title.toUpperCase()}
                      </a>
                    ) : (
                      <Link to={path} className={styles.navLink}>
                        {item.title.toUpperCase()}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
        {/* App download buttons */}
        <div className={styles.appButtons}>
          <a
            href="https://apps.apple.com/au/app/beam/id560637969"
            className={styles.appButton}
            aria-label="Download on App Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appStore} alt="Download on App Store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.beamwallet&hl=en"
            className={styles.appButton}
            aria-label="Get it on Google Play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googlePlay} alt="Get it on Google Play" />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className={isMobileMenuOpen ? styles.open : ""}></span>
          <span className={isMobileMenuOpen ? styles.open : ""}></span>
          <span className={isMobileMenuOpen ? styles.open : ""}></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileNavOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      ></div>
      {/* Mobile Navigation Menu */}
      <div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`}
        id="mobile-nav"
        onClick={(e) => e.stopPropagation()} // Stop clicks from propagating
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavMenu}>
            {navItems &&
              navItems.map((item) => {
                // Determine link path and type for top-level items
                let path = "#";
                let isExternal = item.type === "EXTERNAL";
                let target = isExternal ? "_blank" : undefined;
                let rel = isExternal ? "noopener noreferrer" : undefined;

                if (
                  item.type === "INTERNAL" &&
                  item.related &&
                  item.related.slug
                ) {
                  path = `/${item.related.slug.trim()}`;
                } else if (item.type === "EXTERNAL" && item.externalPath) {
                  path = item.externalPath.trim();
                  if (
                    !path.startsWith("http://") &&
                    !path.startsWith("https://")
                  ) {
                    path = `https://${path}`;
                  }
                } else if (item.path) {
                  path = item.path.trim();
                  path = path.startsWith("/") ? path : `/${path}`;
                  if (
                    item.type === "WRAPPER" &&
                    (path.startsWith("http://") || path.startsWith("https://"))
                  ) {
                    isExternal = true;
                    target = "_blank";
                    rel = "noopener noreferrer";
                  }
                }

                const hasSubmenu = item.items && item.items.length > 0;
                const itemSubmenuId = `mobile-sub-${item.id || item.title}`;

                return (
                  <li
                    key={item.id || item.title}
                    className={styles.mobileNavItem}
                  >
                    {hasSubmenu ? (
                      <>
                        <span
                          className={styles.mobileNavLink}
                          onClick={(e) => toggleMobileSubmenu(itemSubmenuId, e)}
                        >
                          {item.title.toUpperCase()}
                          <i
                            className={`fa-solid ${
                              activeMobileSubmenu === itemSubmenuId
                                ? "fa-chevron-down"
                                : "fa-chevron-right"
                            } ${styles.mobileNavArrow}`}
                          ></i>
                        </span>
                        <ul
                          className={`${styles.mobileSubMenu} ${
                            activeMobileSubmenu === itemSubmenuId ||
                            (activeMobileSubmenu &&
                              String(activeMobileSubmenu).startsWith(
                                `${itemSubmenuId}-`
                              ))
                              ? styles.active
                              : ""
                          }`}
                        >
                          {item.items.map((subItem) => {
                            let subPath = "#";
                            let subIsExternal = subItem.type === "EXTERNAL";
                            let subTarget = subIsExternal
                              ? "_blank"
                              : undefined;
                            let subRel = subIsExternal
                              ? "noopener noreferrer"
                              : undefined;

                            if (
                              subItem.type === "INTERNAL" &&
                              subItem.related &&
                              subItem.related.slug
                            ) {
                              subPath = `/${subItem.related.slug.trim()}`;
                            } else if (
                              subItem.type === "EXTERNAL" &&
                              subItem.externalPath
                            ) {
                              subPath = subItem.externalPath.trim();
                              if (
                                !subPath.startsWith("http://") &&
                                !subPath.startsWith("https://")
                              ) {
                                subPath = `https://${subPath}`;
                              }
                            } else if (subItem.path) {
                              subPath = subItem.path.trim();
                              subPath = subPath.startsWith("/")
                                ? subPath
                                : `/${subPath}`;
                              if (
                                subItem.type === "WRAPPER" &&
                                (subPath.startsWith("http://") ||
                                  subPath.startsWith("https://"))
                              ) {
                                subIsExternal = true;
                                subTarget = "_blank";
                                subRel = "noopener noreferrer";
                              }
                            }

                            const hasGrandchildren =
                              subItem.items && subItem.items.length > 0;
                            const subItemNestedMenuId = `${itemSubmenuId}-${
                              subItem.id || subItem.title
                            }`;

                            return (
                              <li key={subItem.id || subItem.title}>
                                {hasGrandchildren ? (
                                  <>
                                    <span
                                      className={styles.mobileSubLink}
                                      onClick={(e) =>
                                        handleNestedSubmenuClick(
                                          e,
                                          subItemNestedMenuId
                                        )
                                      }
                                    >
                                      {subItem.title.toUpperCase()}
                                      <i
                                        className={`fa-solid ${
                                          activeMobileSubmenu ===
                                          subItemNestedMenuId
                                            ? "fa-chevron-down"
                                            : "fa-chevron-right"
                                        } ${styles.mobileNavArrow}`}
                                      ></i>
                                    </span>
                                    <ul
                                      className={`${styles.mobileNestedMenu} ${
                                        activeMobileSubmenu ===
                                        subItemNestedMenuId
                                          ? styles.active
                                          : ""
                                      }`}
                                    >
                                      {subItem.items.map((grandchildItem) => {
                                        let grandchildPath = "#";
                                        let grandchildIsExternal =
                                          grandchildItem.type === "EXTERNAL";
                                        let grandchildTarget =
                                          grandchildIsExternal
                                            ? "_blank"
                                            : undefined;
                                        let grandchildRel = grandchildIsExternal
                                          ? "noopener noreferrer"
                                          : undefined;

                                        if (
                                          grandchildItem.type === "INTERNAL" &&
                                          grandchildItem.related &&
                                          grandchildItem.related.slug
                                        ) {
                                          grandchildPath = `/${grandchildItem.related.slug.trim()}`;
                                        } else if (
                                          grandchildItem.type === "EXTERNAL" &&
                                          grandchildItem.externalPath
                                        ) {
                                          grandchildPath =
                                            grandchildItem.externalPath.trim();
                                          if (
                                            !grandchildPath.startsWith(
                                              "http://"
                                            ) &&
                                            !grandchildPath.startsWith(
                                              "https://"
                                            )
                                          ) {
                                            grandchildPath = `https://${grandchildPath}`;
                                          }
                                        } else if (grandchildItem.path) {
                                          grandchildPath =
                                            grandchildItem.path.trim();
                                          grandchildPath =
                                            grandchildPath.startsWith("/")
                                              ? grandchildPath
                                              : `/${grandchildPath}`;
                                          if (
                                            grandchildItem.type === "WRAPPER" &&
                                            (grandchildPath.startsWith(
                                              "http://"
                                            ) ||
                                              grandchildPath.startsWith(
                                                "https://"
                                              ))
                                          ) {
                                            grandchildIsExternal = true;
                                            grandchildTarget = "_blank";
                                            grandchildRel =
                                              "noopener noreferrer";
                                          }
                                        }
                                        return (
                                          <li
                                            key={
                                              grandchildItem.id ||
                                              grandchildItem.title
                                            }
                                          >
                                            {grandchildIsExternal ? (
                                              <a
                                                href={grandchildPath}
                                                target={grandchildTarget}
                                                rel={grandchildRel}
                                                className={
                                                  styles.mobileNestedLink
                                                }
                                                onClick={closeMobileMenu}
                                              >
                                                {grandchildItem.title.toUpperCase()}
                                              </a>
                                            ) : (
                                              <Link
                                                to={grandchildPath}
                                                className={
                                                  styles.mobileNestedLink
                                                }
                                                onClick={closeMobileMenu}
                                              >
                                                {grandchildItem.title.toUpperCase()}
                                              </Link>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </>
                                ) : subIsExternal ? (
                                  <a
                                    href={subPath}
                                    target={subTarget}
                                    rel={subRel}
                                    className={styles.mobileSubLink}
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.title.toUpperCase()}
                                  </a>
                                ) : (
                                  <Link
                                    to={subPath}
                                    className={styles.mobileSubLink}
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.title.toUpperCase()}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : isExternal ? (
                      <a
                        href={path}
                        className={styles.mobileNavLink}
                        target={target}
                        rel={rel}
                        onClick={closeMobileMenu}
                      >
                        {item.title.toUpperCase()}
                      </a>
                    ) : (
                      <Link
                        to={path}
                        className={styles.mobileNavLink}
                        onClick={closeMobileMenu}
                      >
                        {item.title.toUpperCase()}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
