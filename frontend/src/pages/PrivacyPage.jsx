import React, { useEffect } from "react";
import "./PrivacyPage.module.css";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";

const PrivacyPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Privacy Policy - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet
        title="Privacy Policy - Beam Wallet"
        pageName="privacy-policy"
      />

      <Hero title="Privacy Policy" backgroundColor="bgPink" />
      <div className="privacy-page">
        <Section
          title="PRIVACY POLICY & COOKIES"
          description={
            <div>
              <br></br>
              <p>
                Our Privacy Policy is based on eight fundamental principles:
              </p>

              <p>
                a) Management: We establish roles and responsibilities for the
                collection, processing, storage and sharing of personal data.
              </p>

              <p>
                b) Notice and transparency: We are transparent about how we
                collect, process and share personal data.
              </p>

              <p>
                c) Choice and consent: We offer relevant choices to Users and
                customers regarding how we use or share personal data.
              </p>

              <p>
                d) Collection: We limit the collection of personal data to what
                is truly necessary to process transactions and provide our
                services.
              </p>

              <p>
                e) Use, retention and deletion: We use and retain personal data
                for purposes consistent with the information transmitted to our
                Users and customers and securely dispose of it.
              </p>

              <p>
                f) Sharing and transfer: We only share personal data where
                permitted by law and with third parties who comply with our data
                protection standards.
              </p>

              <p>
                g) Access and quality: We keep personal data accurate and
                relevant and provide Users and customers with access to their
                personal data.
              </p>

              <p>
                h) Security: We protect personal data and in the event of a
                personal data breach we notify the affected Users and customers
                appropriately and immediately, whenever necessary.
              </p>

              <p>
                Below we present our complete Privacy Policy. Please note that
                your information will be used to provide our services and in
                accordance with this Privacy Policy and the General Terms and
                Conditions. Please contact us if you have any questions
                regarding this Privacy Policy or other general questions
                regarding your personal data.
              </p>
              <br></br>
              <p>
                <b>1. Definitions</b>
              </p>

              <p>
                a) Beam: means all programs and applications of the Beam brand
                and the company GBC S.A., with personal data processed in
                accordance with the privacy policies made available there.
              </p>

              <p>
                b) Personal Data: refers to information that can be associated
                with an identified or directly or indirectly identifiable
                natural person. Personal Data may include, but is not limited
                to, name, postal address (including shipping and billing
                addresses), telephone number, email address, payment card
                number, other financial account information, account number,
                date of birth and official credentials (e.g. driver's license
                number, national identity document, passport number) and
                biometric data.
              </p>

              <p>
                c) Device Information: refers to data that may be automatically
                collected from any device used to access the Sites or Services.
                This information may include, but is not limited to, the device
                type, the device's network connections, the device name, the
                device's IP address, information about the device's browser, and
                the internet connection used to access the Sites or Services. ,
                Geolocation Information, information about applications
                downloaded to the User's device and biometric data.
              </p>

              <p>
                d) Geolocation Information: refers to information that
                identifies, with precise specificity, the User's location using,
                for example, longitude and latitude coordinates obtained through
                GPS or the User's device settings.
              </p>

              <p>
                e) Location Information: refers to information that identifies,
                with reasonable specificity, the approximate location of the
                User using, for example, longitude and latitude coordinates
                obtained through GPS, Wi-Fi or cell phone location
                triangulation.
              </p>

              <p>
                f) Services: means any service, content, functionality,
                technology or function, branded by Beam, as well as all related
                websites, applications and services made available to you by
                Beam. Your use of the services includes your use of our
                websites.
              </p>

              <p>
                g) Websites: designates the websites, mobile applications,
                social media platforms or other online properties through which
                Beam provides services and which have posts or links to this
                Privacy Policy.
              </p>

              <p>
                h) User: any person, natural or legal, who uses the services,
                the application and the website. Includes merchants who enter
                into a commercial contract with Beam. For the purposes of this
                Privacy Policy, User includes "you" and "your".
              </p>
              <br></br>
              <p>
                <b>2. General</b>
              </p>

              <p>
                This Privacy Policy aims to provide the User with sufficient
                information regarding the use of their personal data by Beam
                when the User visits our website, applies for or uses our
                services. We encourage the User to read this Privacy Policy and
                use it to help make informed decisions.
              </p>
              <br></br>
              <p>
                <b>3. Responsibility for Treatment</b>
              </p>

              <p>
                Beam is the controller of personal data collected and processed
                in relation to personal data obtained when the User visited the
                Beam websites, during the registration and sign-up process and
                during the User's ongoing use of the services. Any reference to
                "we", "our", "Beam" or "Beam Companies" in this Privacy Policy
                means GBC S.A. and the group of companies directly or indirectly
                controlled by it. Some of the third parties with whom Bem may
                share personal data are independently responsible for processing
                the data. This means that Beam is not determining how the data
                it shares will be processed. Some examples are authorities,
                credit agencies, issuers and other financial institutions. When
                User data is shared with independent data controllers, the data
                policies of those controllers apply. We encourage the User to
                read the privacy policies of these responsible parties and to
                know their privacy rights before interacting with them.
              </p>
              <br></br>
              <p>
                <b>4. Categories of Personal Data</b>
              </p>

              <p>
                4.1. Beam collects the following categories of User information
                to provide our services, continually improve the User
                experience, manage and improve our business. The types of
                personal data that we may or may not collect depend on whether
                the User of our services acts as a mere consumer, or as a
                merchant subscribing to our services, in the latter case more
                data will be collected:
              </p>

              <p>
                a) Contact and registration information: Name, address, email,
                telephone number, tax or legal entity identification number,
                payment information, company information and other User
                information necessary to establish an account and use our
                services.
              </p>

              <p>
                b) Identification and signature information: Information to
                confirm the User's name, address, email, telephone number,
                official identification, age and biometric data, as well as
                information about the company.
              </p>

              <p>
                c) Payment information: Information such as amount sent or
                requested by the User, payment instrument, card or financial
                account or fund used in connection with the services, including
                issuer name, card type, country code, payment account number ,
                CVV, Username and IBAN information.
              </p>

              <p>
                d) Information in your account profile: Information that the
                User chooses to enter, such as User name, email, cell phone
                number, or preferred language, which may include sensitive
                personal data, which reveals religious beliefs, political or
                philosophical opinions , disabilities, sexual orientation and
                biometric data. You can change your profile at any time.
              </p>

              <p>
                e) Information provided by the User when contacting Beam:
                Information that the User discloses when responding to surveys
                or contacting our Customer Service teams, such as services used,
                recorded conversations, chat conversations with Beam, email
                correspondence mail with Beam, account status and transaction
                history. This may include information about others if the User
                is a merchant participating in the Beam network.
              </p>

              <p>
                f) Device Information: Information that may be collected
                automatically from any device used to access the Site or
                Services. This information may include, but is not limited to,
                the device type, the device's network connections, the device
                name, the device's IP address, information about the device's
                browser, and the Internet connection used to access the Sites or
                Services , Geolocation Information, information about
                applications downloaded to the User's device and biometric data.
              </p>

              <p>
                g) Inferred Data: Beam may infer inferences from User's
                transactions and Personal Data when User uses the Services. We
                do this, for example, to help keep your account secure and
                protect your use of the Services against fraud. We may infer
                deductions that reflect behavioral patterns and personal
                preferences, purchasing and browsing habits of the User.
              </p>

              <p>
                4.2. Categories of Personal Data collected from third parties,
                including from identity verification providers, data brokers,
                vendors that help us detect fraud, your bank, merchants or
                external platforms used by you with our Services:
              </p>

              <p>
                a) Information from the User's linked third-party accounts. If
                User chooses to associate financial or non-financial accounts,
                such as personal email, social media, or bank or credit
                accounts, Beam will collect information consistent with the
                disclosed purpose for which it was associated. For example, if
                User chooses to participate in open banking services, Beam will
                collect account credentials, account balances, account
                transactions, and information about User's financial situation
                from User's associated accounts. The User can change their mind
                regarding the use of this functionality and disassociate the
                linked accounts whenever they wish.
              </p>

              <p>
                b) Information from financial rating agencies: When permitted by
                law, Beam collects credit-related information such as
                outstanding debt and debt history, repayment history, previous
                credit approvals, current employment relationships, and
                relationships with other financial institutions in the framework
                of the User's use of our Services.
              </p>

              <p>
                c) Transaction Information: Information about order and purchase
                details such as item description, quantity, price, currency,
                shipping address, online shopping cart information, seller and
                buyer information, and payment information.
              </p>

              <p>
                d) Information related to legal requirements: In accordance with
                applicable legislation (e.g. anti-money laundering legislation),
                this may include information from external sanctions lists such
                as name, date of birth, place of birth, activity and the reason
                for which person is on the list in question.
              </p>

              <p>
                e) Third-party applications: Information from other entities
                regarding your use of third-party applications, such as social
                media sites, such as name, your social media ID, location
                information, email, device ID , browser ID and profile picture.
                Your use of third-party applications is subject to the privacy
                notice and terms of service for such applications.
              </p>

              <p>
                4.3. Categories of Personal Data automatically collected about
                the User, including through the User's access to the Beam
                website or mobile application, from cookies and similar tracking
                technologies, and the User's devices:
              </p>

              <p>
                a) Technical usage data: Information about web page response
                times, download errors and date and time of service use, such as
                the User's IP address, statistics regarding how pages are loaded
                or viewed, the websites visited before enter the Sites and other
                usage and navigation information collected through Cookies.
              </p>

              <p>
                b) User device information: Information about the User's
                language settings, IP address, browser ID, device ID, cookie
                preferences, time zone, operating system, platform, screen
                resolution and similar information about the User's device
                settings. User's device, as well as data collected from cookies
                or other tracking technologies.
              </p>

              <p>
                c) Location information: IP-based geolocation information such
                as latitude and longitude data and GPS information when the User
                gives permission to Beam through the device settings.
              </p>

              <p>
                d) Inferred data: Inferences made to create a profile about the
                User that could reflect behavioral patterns and personal
                preferences, such as gender, income, browsing and purchasing
                habits and debt capacity.
              </p>
              <br></br>
              <p>
                <b>5. Legal Basis</b>
              </p>

              <p>
                5.1. Beam may process your Personal Data for a variety of
                reasons permitted under applicable data protection laws. Beam
                collects the following Personal Data that it deems necessary to
                fulfill its pre-contractual and contractual obligations towards
                the User and without which the User will not be able to use the
                Services: Contact and registration information; Identification
                and signature information; Payment information; Information
                related to legal requirements; Information provided by the User
                when he contacts Beam; Transaction information; Service-specific
                personal data; Information from financial rating agencies and
                financial institutions; Information from the User's linked
                financial accounts; Information about the User's use of the
                Services; Technical usage data; Device information; Location
                data.
              </p>
              <p>These activities include:</p>

              <p>
                a) provide our Services, fulfill relevant agreements with the
                User and otherwise manage our business relationship with the
                User.
              </p>

              <p>
                b) manage payment for products by the User and the relationship
                with the customer.
              </p>

              <p>
                c) evaluate the User in relation to their application, confirm
                their identity and contact information and protect them and
                others against fraud.
              </p>

              <p>
                d) confirm the User's identity and verify the User's personal
                and contact details.
              </p>

              <p>e) prove that the transactions were carried out.</p>

              <p>
                f) establish, exercise or defend a legal right or collection
                procedures.
              </p>

              <p>g) comply with internal procedures.</p>

              <p>
                h) evaluate which payment options and services to offer the
                User, for example, through internal and external credit
                assessments.
              </p>

              <p>
                i) for customer analysis, to administer our Services and for
                internal operations, such as for troubleshooting, data analysis,
                testing, research and statistical purposes.
              </p>

              <p>j) communicate with the User in relation to our Services.</p>

              <p>
                k) comply with applicable EU and Member State legislation, such
                as anti-money laundering and record keeping laws, as well as
                rules issued by our designated banks and relevant card networks.
              </p>

              <p>
                5.2. We have a legitimate interest in ensuring that Beam
                continues to be a secure service and to offer innovative
                services of interest to the User. We do this when our legitimate
                interests are not overridden by the User's right not to have
                their data processed for this purpose. These activities include:
              </p>

              <p>
                a) ensure that the content is presented in the most effective
                way for the User and their device.
              </p>

              <p>
                b) prevent misuse of our Services as part of our efforts to keep
                our platform safe and secure.
              </p>

              <p>
                c) determine User's eligibility for and communicate with User
                about Services for which User may meet the requirements or which
                may interest User.
              </p>

              <p>
                d) perform risk analysis, fraud prevention and risk management.
              </p>

              <p>
                e) improve our Services and for general business development
                purposes, for example, improving risk models to minimize fraud,
                developing new products and features, and exploring new business
                opportunities.
              </p>

              <p>
                f) keep the User's Account and financial information up to date.
              </p>

              <p>
                g) for marketing, product and customer analysis, including
                testing, for example, to improve our range of services and
                optimize our customer offerings.
              </p>

              <p>
                h) comply with applicable legislation, such as anti-money
                laundering and accounting laws, capital adequacy regulatory
                requirements and rules issued by our designated banks and
                relevant card networks. For example, when we process Personal
                Data in accordance with the requirements of the customer
                verification process (Know Your Customer, KYC), to prevent,
                detect and investigate money laundering, terrorist financing and
                fraud. We also carry out sanctions checking, communicate with
                tax authorities, law enforcement authorities, law enforcement
                authorities, control authorities without any obligation under EU
                and Member State law, but when we believe in good faith that
                sharing information is necessary to comply with applicable law.
              </p>

              <p>
                i) facilitate the User's participation in competitions, offers
                and events.
              </p>

              <p>
                j) process information about the User's contacts to make it
                easier to find and connect with them and improve the accuracy of
                payments. By providing Beam with information about your
                contacts, the User certifies that they have permission to
                provide this information to Beam for the purposes described in
                this Privacy Policy.
              </p>

              <p>
                k) provide the User with information, news and marketing about
                our Services, including situations in which we partner with
                other entities to offer similar services.
              </p>

              <p>
                l) remember your preferences for the next time you use the
                Services, such as which payment method you prefer.
              </p>

              <p>
                5.3. Under EU and Member State law, we have a legal obligation
                to carry out certain processing activities. We do this when
                necessary to comply with applicable laws. These activities
                include:
              </p>

              <p>a) provide our Services and products.</p>

              <p>
                b) certify the User's identity and verify their Personal and
                contact details.
              </p>

              <p>
                c) establish, exercise or defend a legal right or collection
                procedures.
              </p>

              <p>
                d) prevent misuse of our Services as part of our efforts to keep
                our platform safe and secure.
              </p>

              <p>
                e) perform risk analysis, fraud prevention and risk management.
              </p>

              <p>
                g) comply with applicable legislation, such as anti-money
                laundering and accounting laws, and capital adequacy regulatory
                requirements and rules issued by our designated banks and
                relevant card networks. For example, when we process Personal
                Data in accordance with the requirements of the customer
                verification process (Know Your Customer, KYC), to prevent,
                detect and investigate money laundering, terrorist financing and
                fraud. We also carry out sanctions checking, report to tax
                authorities, law enforcement authorities, law enforcement
                authorities and supervisory authorities.
              </p>

              <p>
                Beam relies on the User's explicit and voluntary consent to the
                processing of their Personal Data to participate in certain
                functionalities that, despite not being necessary for the use of
                the Services, may be of interest to the User, such as
                synchronizing their mailing lists. contacts to your account, the
                provision of biometric data, targeted advertising or linking to
                a third-party platform. The User may change his or her mind
                regarding the use of these features at any time. Keep in mind
                that the revocation of your consent will not affect the
                legitimacy of any processing carried out before the User's
                revocation. Find more information about your right to revoke
                consent in the appropriate section of this Privacy Policy.
              </p>
              <br></br>
              <p>
                <b>6. Sharing</b>
              </p>

              <p>
                Beam may share User Personal Data with third parties when there
                is a legal basis to do so. This includes:
              </p>

              <p>
                a) With other Beam companies, to provide the User with the
                Services and for our own legitimate interests in conducting our
                business. The receiving Beam company will process the User's
                Personal Data in accordance with this Privacy Policy.
              </p>

              <p>
                b) With the authorities, to the extent that we have a legal
                obligation to do so. These authorities include tax authorities,
                law enforcement authorities, competent authorities and control
                authorities in the relevant countries. We may also need to
                provide competent authorities with information about how you use
                our Services, such as tax or revenue authorities, which may
                include your name, address and information relating to card
                transactions processed by us. Beam on your behalf through our
                Services. The legal basis for complying with disclosure
                obligations under EU and Member State law is the legal
                obligation and when acting under non-EU and Member State law,
                based on our legitimate interest in respecting relevant laws to
                prevent illegal conduct.
              </p>

              <p>
                c) With financial institutions and card networks, for example to
                facilitate payment processing, jointly offer a product or add
                cards to the User's electronic wallet. The legal basis for
                disclosure by Beam is the performance of our contract with the
                User. These parties may also access User Personal Data for other
                legitimate purposes, such as identification verification, fraud
                prevention and risk management. The legal basis for this
                processing is the legitimate interests of Beam and our partners
                and merchants in preventing fraudulent and illegal conduct.
              </p>

              <p>
                d) With fraud prevention and identity verification agencies, for
                example, to help us detect activities that suggest fraud. The
                legal basis for this processing is the legitimate interests of
                Beam and our partners and merchants in preventing fraudulent and
                illegal conduct.
              </p>

              <p>
                e) With service providers who operate on referrals and on behalf
                of Beam to perform services that we subcontract to them, such as
                marketing, IT development, maintenance, hosting and support, and
                customer service operations. The legal basis for this processing
                is the performance of our contractual obligations to the User.
              </p>

              <p>
                f) With other Users, namely merchants participating in the beam
                network, in accordance with the User's account settings. The
                User may present or make certain information available to these
                other Users, such as User name or city, in accordance with the
                User's account settings. The legal basis for this processing is
                the User's consent. Keep in mind that the User can change their
                profile settings whenever they want, at no cost.
              </p>

              <p>
                g) With financial institutions in relation to the User's
                participation in open banking services, for example, when the
                User initiates an account association with another bank, card
                account or aggregator. We may do this to verify that the User
                has sufficient funds or to confirm that the User is the account
                holder. When the User chooses to link the account, the legal
                basis for accessing the account data is the performance of our
                contractual obligations to the User.
              </p>

              <p>
                h) With partners and merchants, their service providers and
                others involved in a transaction, for example when you use the
                Services to pay for online purchases, pay Beam merchants or
                return products, we may share information about you and your
                account with the other parties involved in processing the User's
                transactions. The legal basis for this processing is the
                performance of our contractual obligations to you and our
                legitimate interests. Please keep in mind that Personal Data
                shared with partners and merchants (their respective service
                providers) involved in a transaction is subject to the partners'
                and merchants' privacy policies and procedures.
              </p>

              <p>
                i) With third parties who are independently responsible for
                processing data, for example, when we share Personal Data with
                credit reference agencies, issuing entities and other financial
                institutions or security products to prevent bots from accessing
                our Services. Please keep in mind that these parties' privacy
                notice applies to the processing of Personal Data that the User
                shares directly with them.
              </p>

              <p>
                j) With buyers or in connection with the transfer of business,
                for example, if we sell business or assets, we may share your
                Personal Data with a buyer of those assets or business. If Beam
                or a significant portion of Beam's assets are acquired by a
                third party, Personal Data may also be shared. Beam has a
                legitimate interest in being able to carry out these
                transactions.
              </p>
              <br></br>
              <p>
                <b>7. Storage</b>
              </p>

              <p>
                We keep Personal Data for as long as necessary or permitted
                within the scope of the purpose for which it was collected and
                in accordance with applicable legislation. The criteria used to
                determine the retention period by Beam are as follows:
              </p>

              <p>
                a) Personal Data used for the ongoing relationship between the
                User and Beam is stored for the duration of the relationship
                plus a period of 5 years.
              </p>

              <p>
                b) Personal data relating to a legal obligation to which we are
                subject is maintained in accordance with applicable legislation,
                such as insolvency and other applicable laws.
              </p>

              <p>
                c) Beam retains Personal Data for at least as long as such
                retention is recommended, in light of litigation,
                investigations, auditing and compliance practices, as well as to
                protect against legal action.
              </p>
              <br></br>
              <p>
                <b>8. International Transfers of Personal Data</b>
              </p>

              <p>
                We operate in several countries and may, like our service
                providers, move User data and process it outside the country in
                which the User lives. We use independent service providers to
                process and store User information, including in other
                countries. These countries may not offer the same level of
                privacy protection. Therefore, we take measures to protect User
                Personal Data. The international transfer of Personal Data is
                based on standard contractual clauses, approved by the European
                Commission, to help ensure that User information has a high
                standard of protection and that the User's privacy rights are
                respected.
              </p>
              <br></br>
              <p>
                <b>9. Cookies and Tracking Technologies</b>
              </p>

              <p>
                When you interact with our Services, open an email we send, or
                visit an external website for which we provide Services, we and
                our partners use cookies and other tracking technologies to
                recognize you as a User, personalize your online experiences and
                content online, including to offer the User interest-based
                advertising, perform analysis, mitigate risks and prevent
                potential fraud, as well as promote trust and security on our
                Sites and Services. Certain aspects and functionalities of our
                Services and Sites are only available through the use of
                cookies, therefore, if the User refuses certain cookies, their
                use of the Sites and Services may be limited or not possible.
              </p>

              <p>
                We use cookies to collect User device information, internet
                activity information and the inferences described above. Our
                cookies and similar technologies have different functions. They
                are necessary for our services to work, help us improve our
                performance, provide extra features or help us show you relevant
                and targeted advertisements. We use cookies and similar
                technologies that only remain on your device for as long as you
                keep your browser active (session) and cookies and similar
                technologies that remain on your device for a longer period of
                time (persistent). You can block, delete or disable these
                cookies if your device allows it.
              </p>

              <p>
                You can manage your cookies and cookie preferences in your
                browser or device settings. When possible, security measures are
                applied to prevent unauthorized access to your cookies and
                similar technologies. A unique identifier ensures that only we
                and/or our authorized service providers have access to cookie
                data. Service providers are companies that help us with various
                aspects of our business, such as online website operations,
                services, applications, advertisements and tools. We use certain
                authorized service providers to help us serve relevant ads about
                our services and elsewhere on the Internet.
              </p>

              <p>
                These service providers may also place cookies on your device
                through our services (third-party cookies). They may also
                collect information that helps them identify your device, such
                as your IP address or other unique or device identifiers. The
                specific names and types of cookies, Web beacons and other
                similar technologies we use may change from time to time. To
                help you better understand this Privacy Policy and our use of
                these technologies, we have provided the following limited
                terminology and definitions:
              </p>

              <p>
                a) Cookies: small text files (usually made up of letters and
                numbers) placed in the memory of your browser or device when
                visiting a website or viewing a message. Cookies allow a website
                to recognize a particular device or browser. There are several
                types of cookies.
              </p>

              <p>
                b) Session cookies: cookies that expire at the end of your
                browser session and allow us to associate your actions during
                that specific browser session.
              </p>

              <p>
                c) Persistent cookies: cookies that are stored on your device,
                between browser sessions, allowing us to remember your
                preferences or actions across various Internet pages.
              </p>

              <p>d) Own cookies: are set by the website you are visiting.</p>

              <p>
                e) Third-party cookies: are set by a third-party website
                separate from the website you are visiting.
              </p>

              <p>
                Cookies can be disabled or removed by tools that are available
                in most commercial browsers. Preferences for each browser you
                use must be set separately, and different browsers offer
                different options and features.
              </p>

              <p>
                f) Web beacons: small graphic images (also known as "pixel tags"
                or "clear GIFs") that may be included on our Internet pages,
                services, applications, messages and tools, which typically work
                in combination with cookies to identify the our Users and Users'
                behavior.
              </p>

              <p>
                g) Similar Technologies: Technologies that store information on
                your browser or device using local shared objects or local
                storage, such as flash cookies, HTML 5 cookies and other
                Internet application software methods. These technologies may
                operate across all of your browsers and in some cases may not be
                fully managed by your browser and may need direct management
                through your installed applications or devices.
              </p>
              <p>
                Our use of cookies and similar technologies falls into the
                following general categories:
              </p>

              <p>
                h) Essential: we may use cookies, web beacons, or other similar
                technologies that are necessary for the operation of our
                Internet pages, services, applications and tools. This includes
                technologies that enable access to our web pages, services,
                applications and tools, which are necessary to identify
                irregular page behavior, prevent fraudulent activity and improve
                security; or that allow you to use our features, such as a
                shopping cart, saved searches or similar features;
              </p>

              <p>
                i) Performance-related: We may use cookies, web beacons or other
                similar technologies that evaluate the performance of our
                websites, applications, services and tools, including to, as
                part of our analytical practices, help us understand how our
                visitors use our web pages or to improve our web page content,
                applications, services or tools;
              </p>

              <p>
                j) Related to functionality: we may use cookies, web beacons, or
                other similar technologies that are necessary to offer improved
                functionality when accessing or using our websites, services,
                applications and tools. This may include identifying you when
                you log in to our web pages or keeping a record of your
                specified preferences, interests or last viewed articles so that
                we can improve the display of content on our web pages;
              </p>

              <p>
                k) Related to advertising or personalization: we may use our own
                or third-party cookies and Web beacons to serve content,
                including advertisements, relevant to your interests on our
                websites or on third-party websites. This includes using
                technologies to understand how useful advertisements and content
                sent to you are to you, such as whether you clicked on an
                advertisement.
              </p>

              <p>
                The personal information we collect and store through the use of
                these technologies is based on your consent, obtained through
                prominent disclosure on our website during your first visit. You
                can revoke this consent through your browser settings.
              </p>
              <br></br>
              <p>
                <b>10. Data Protection Rights</b>
              </p>

              <p>
                Under applicable data protection legislation, in particular
                Regulation (EU) 2016/679 of the European Parliament and of the
                Council of 27 April 2016, the User has certain rights to control
                the collection and use of their Personal Data by Beam. User
                rights include:
              </p>

              <p>
                a) Access, rectification, deletion, objection, portability and
                restriction of User information: We recognize the importance of
                the User's ability to control the use of their Personal Data and
                provide several ways for the User to exercise their access
                rights (right to know). , rectification (correction or update),
                deletion (deletion), objection, portability (transfer) and
                limiting the process, in whole or in part. If you have an
                account, the User can exercise their data protection rights by
                accessing the account settings in the Beam application. The User
                may also submit a request to access, modify, correct or delete
                their information. You may submit a request regarding another
                person's information, if you are an authorized agent of that
                person, by contacting Beam. Keep in mind that Beam may ask the
                User for additional information for verification.
              </p>

              <p>
                b) The User's right to object to automatic decisions and
                profiles: if the User is not approved under the automatic
                decisions, he will not have access to Beam services, such as our
                payment methods. Beam has several security mechanisms to ensure
                that decisions are appropriate. These mechanisms include ongoing
                overviews of our decision models and random samples in
                particular cases. If the User has any concerns about the
                outcome, they can contact us and Beam will determine whether the
                procedure was performed correctly. The User has the right to
                object to an automatic decision with legal consequences or
                decisions that may significantly affect him (along with the
                relevant profile) when contacting us. Beam will then review the
                decision, taking into account additional relevant circumstances.
              </p>

              <p>
                c) Consent: generally, if we use the User's Personal Data with
                the User's consent, the User will have the right to revoke the
                consent at any time without affecting the lawfulness of
                processing based on the consent before the consent was revoked.
                The User's revocation of consent will not affect the lawfulness
                of any processing carried out by Beam prior to the revocation,
                nor will it affect the processing of the User's Personal Data
                carried out in reliance on processing on legal bases other than
                consent.
              </p>

              <p>
                d) Right to object to direct marketing: if we use the User's
                Personal Data for direct marketing, the User can change
                permissions at any time, object and opt-out of future direct
                marketing messages with the link to unsubscribe from
                communications electronically or through your account settings.
              </p>

              <p>
                e) Right to object to processing based on legitimate interest:
                If Beam uses the User's Personal Data to defend our legitimate
                rights or those of third parties, the User will have the right
                to object to their use for this purpose.
              </p>

              <p>
                If, for any reason, the User is not satisfied with Beam's
                processing of their Personal Data, they have the right to lodge
                a complaint with the data protection supervisory authority in
                their country. Our data protection officer can be contacted
                online at legal@beamwallet.com or by mail at Beam, Rua Manuel de
                Arriaga, 99-A, 2785-153 São Domingos de Rana, Cascais, Portugal.
                You can also register a complaint with the CNPD – National Data
                Protection Commission, by mail to Av. D. Carlos I, 134, 1st,
                1200-651 Lisbon. Finally, the User may also seek a remedy
                through local courts if they believe that their rights have been
                violated.
              </p>
              <br></br>
              <p>
                <b>11. Automatic Decision Making and Profiling</b>
              </p>

              <p>
                "Automatic decision making" is the process of making a decision
                by fully automatic means without human involvement. In some
                cases, these decisions may have a legal or similar effect on the
                User as an individual. "Profiling" means the analysis of the
                personality, behavior, interests and habits of an individual in
                order to make predictions or decisions regarding them. When
                authorized under EU or Member State law or when necessary for
                the conclusion or performance of a contract, Beam may in some
                cases use automatic decision-making or profiling for decisions.
              </p>

              <p>
                An example of how we can use automatic decision-making is the
                User's debt capacity to assess the suitability of the User for
                certain credit products. We believe that by making these
                decisions automatically, Beam increases its objectivity and
                transparency in relation to deciding which services to offer the
                User. Beam implements several security mechanisms to ensure that
                decisions are appropriate.
              </p>

              <p>
                These mechanisms include ongoing overviews of our decision
                models and random samples in particular cases. The User can
                always request a manual decision-making process, express his
                opinion or contest the decision-making based solely on automatic
                processes, including profiling, if this decision has legal
                effects or affects him in another similar significant way.
                Please contact our Online Data Protection Manager (RPD) if you
                require more information about how we use automatic
                decision-making or profiling.
              </p>
              <br></br>
              <p>
                <b>12. Credit Reference Agencies</b>
              </p>

              <p>
                Beam may offer credit services. If the User requests or uses our
                credit services, they may have to provide their Personal Data to
                credit reference agencies, which will provide Beam with
                information about the User, such as financial history. This will
                only be used to assess the debt capacity and suitability of the
                products, verify the User's identity, track and recover debts
                and prevent criminal activities. The legal basis for this
                transmission is contractual and legitimate interest, and can be
                found in paragraph 1 of article 6 of the EU General Data
                Protection Regulation (GDPR). The exchange of information about
                the User with credit rating agencies will occur on an ongoing
                basis, including information about the User's settled accounts
                and any debts that are not paid in full in a timely manner.
              </p>

              <p>
                This information may be provided by credit reference agencies to
                other organizations to carry out similar checks, track the
                User's whereabouts and recover debts from the User. User data
                will also be associated with the data of joint applicants or
                other financial associates. Please contact our Data Protection
                Officer for details of which credit reference agencies we use
                for a specific search. You can contact credit reference agencies
                operating in the country in which you live directly if you have
                questions regarding their services, your credit score or the
                information they have stored about you, as well as if you wish
                to exercise your rights of the data subject in relation to them.
              </p>
              <br></br>
              <p>
                <b>13. Protection</b>
              </p>

              <p>
                Beam maintains technical, physical and administrative security
                measures designed to provide a reasonable level of protection
                for User Personal Data against loss, misuse, unauthorized
                access, disclosure and alteration. Security measures include
                firewalls, data encryption, physical access controls to our data
                centers and information access authorization controls. Although
                we are committed to protecting our systems and Services, you are
                responsible for protecting and maintaining the privacy of your
                passwords and account/profile registration information, and for
                confirming that your personal data that Beam maintains is
                accurate and current. Beam is not responsible for protecting
                Personal Data that you share with a third party based on a
                User-authorized account association.
              </p>

              <br></br>
              <p>
                <b>14. Minors</b>
              </p>

              <p>
                Beam does not knowingly collect information, including Personal
                Data, from minors under 18 years of age or other individuals
                without legal capacity to use our Sites and Services. If we
                become aware that we have actually collected Personal Data from
                someone not authorized to use our Services, we will delete it
                immediately, unless we have a legal obligation to keep it.
                Please contact us if you believe that we have wrongly or
                unintentionally collected information from someone not
                authorized to use our Services.
              </p>

              <br></br>
              <p>
                <b>15. Updates</b>
              </p>

              <p>
                Beam periodically revises this Privacy Policy to include changes
                regarding Beam's business, Beam Services or applicable law. If
                the revised version of the Privacy Policy requires, under
                applicable law, prior notice to the User, Beam will do so.
                Otherwise, the revised Privacy Policy will take effect
                immediately after its change, regardless of prior notice.
              </p>

              <br></br>
              <p>
                <b>16. Banking Regulations (Users in the EEA and UK)</b>
              </p>

              <p>
                In general, the laws in force in countries belonging to the
                European Union regarding the processing of personal data to
                which the Beam User is subject (data protection and banking
                secrecy) require a greater degree of transparency than those in
                force in countries that do not belong to the European Union.
                That is why, unlike the vast majority of internet-based service
                providers or financial services providers in the EU, Beam
                dedicates part of this Privacy Policy to independent service
                providers and partners and merchants to whom it may disclose
                User data, together with the purpose of disclosure and the type
                of information disclosed. By accepting this Privacy Policy and
                maintaining a Beam account, the User expressly agrees to the
                transfer of the respective data to the aforementioned third
                parties for the listed purposes. If you do not agree, you may
                close your account and stop using our services.
              </p>

              <p>
                To provide the Beam Services, we may need to transfer certain
                information that Beam collects to other entities or companies
                related to Beam, including those mentioned in this Privacy
                Policy, such as payment service providers, payment processors or
                account holders (or capabilities similar). The User acknowledges
                that, subject to the local laws of these entities, they may be
                subject to laws, regulations, consultations, investigations or
                orders that may require the disclosure of information to the
                relevant authorities of the country in question. By using the
                Beam Services, the User is authorizing the transfer of this same
                information to provide the Beam Services to you. Specifically,
                the User agrees that Beam does any and all of the following with
                their data:
              </p>

              <p>
                a) Disclose necessary information to the police and other law
                enforcement authorities, security forces, competent
                governmental, intergovernmental or supranational bodies,
                competent agencies, ministries, regulatory authorities,
                self-regulatory authorities or organizations and other third
                parties, including Group companies Beam, which we are legally
                obliged and authorized to respect, with whom we deem appropriate
                to collaborate in investigations of fraud or other illegal or
                potentially illegal activity, or carry out investigations of
                situations of non-compliance with our General Terms and
                Conditions and Platform Membership Terms and Conditions Beam
                (including, without limitation, your funding source or your
                credit or debit card issuer). If you are covered by the Foreign
                Account Tax Compliance Act (FATCA) or the Common Reporting
                Standard (CRS), we are required to notify you that your
                information may be transferred to various authorities. Read more
                about Beam's obligations under the FATCA and CRS Laws and how
                they could affect you, and take note of the information we may
                disclose as a result. Beam and other organizations, including
                parties that accept Beam, may also share, access and use
                (including from other countries) necessary information
                (including, but not limited to, information recorded by fraud
                prevention agencies) to help us, us and them, assess and manage
                risk (including, but not limited to, preventing fraud, money
                laundering and terrorist financing). Please contact us if you
                would like to receive further details about relevant fraud
                prevention agencies.
              </p>

              <p>
                b) Disclose Account Information to intellectual property rights
                holders if, under the applicable national law of an EU Member
                State, they have a claim against Beam for extrajudicial
                disclosure of information due to a violation of their
                intellectual property rights for which the Beam Services were
                used.
              </p>

              <p>
                c) Disclose necessary information in response to the
                requirements of credit card associations or in connection with
                civil or criminal legal proceedings.
              </p>

              <p>
                d) If you, as a merchant, use a third party to access or
                integrate Beam, we may disclose to any partner information
                necessary to facilitate and maintain the agreement in question
                (including, but not limited to, the status of your Beam
                integration). Beam, if you have an active Beam account and are
                already working with a different Beam integration partner).
              </p>

              <p>
                e) Disclose necessary information to payment processors,
                auditors, customer service providers, anti-fraud and financial
                rating agencies, financial product providers, partners,
                merchants, marketing and public relations companies, operational
                service providers, group companies, agencies, marketplaces and
                other third parties. The purpose of this disclosure is to allow
                us to make the Beam Services available to the User.
              </p>

              <p>
                f) Disclose information necessary to the User's agent or legal
                representative (such as the holder of a power of attorney that
                the User grants or a guardian appointed for him).
              </p>

              <p>
                g) Disclose aggregated statistical data to our partners and
                merchants or to public relations. For example, we may disclose
                that a certain percentage of our Users live in Madrid. However,
                this aggregated information is not associated with Personal
                Data.
              </p>

              <p>
                h) Share required Account Information with non-affiliated third
                parties for their use for the following purposes:
              </p>

              <p>
                i. Fraud Prevention and Risk Management: to help prevent fraud
                or assess and manage risks;
              </p>

              <p>
                ii. Customer Service: for Customer Service purposes, including
                assisting with User accounts or resolving User disputes (e.g.
                billing or transactions);
              </p>

              <p>
                iii. Shipping: in relation to shipping and related services for
                purchases made with Beam, namely through e-commerce stores;
              </p>

              <p>
                iv. Legal Compliance: to help meet verification requirements
                related to anti-money laundering and combating terrorist
                financing;
              </p>

              <p>
                v. Service Providers: to enable service providers under a
                contract with Beam to support our business operations such as
                fraud prevention, invoice collection, marketing, Customer
                Service and technology services. Our contracts stipulate that
                these service providers only use User information within the
                scope of the services they provide to Beam and not for their own
                benefit.
              </p>
              <br></br>
              <p>
                <b>17. Contact</b>
              </p>

              <p>
                Our data protection officer can be contacted online (at
                legal@beamwallet.com), or by post (at Beam, Rua Manuel de
                Arriaga, 99-A, 2785-153 São Domingos de Rana, Cascais,
                Portugal).
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};

export default PrivacyPage;
