import React, { useEffect } from "react";
import Section from "../components/Section/Section";
import PageHelmet from "../components/PageHelmet";
import Hero from "../components/Hero/Hero";

const TermsPage = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Terms and Conditions - Beam Wallet";
  }, []);

  return (
    <>
      <PageHelmet
        title="Terms and Conditions - Beam Wallet"
        pageName="terms-conditions"
      />

      <Hero title="Terms and Conditions" backgroundColor="bg-pink" />
      <div className="terms-page">
        <Section
          title="GENERAL TERMS AND CONDITIONS"
          description={
            <div>
              <p>
                <strong>GENERAL TERMS AND CONDITIONS</strong>
              </p>
              <p>
                <b>1. Welcome to Beam</b>
              </p>
              <p>
                These are the General Terms and Conditions of the relationship
                between Beam and the user.
              </p>
              <p>
                The General Terms and Conditions come into force from
                17.02.2024, applying to all people, natural or legal, who visit
                our Beam website and install and use our Beam mobile app.
              </p>
              <p>
                In order to visit our website and install and use our
                application, the user must agree with the content of these
                General Terms and Conditions.
              </p>
              <p>
                Browsing our website and installing and using our application
                for mobile phones represents full and complete acceptance of
                these Terms and General Conditions, which is why we recommend
                reading them before continued browsing and/or use.
              </p>
              <p>
                If you do not agree with these General Terms and Conditions, do
                not visit the website, nor use our application.
              </p>
              <p>
                We will occasionally review the General Terms and Conditions.
              </p>
              <p>
                When this happens, the new version of the General Terms and
                Conditions will be published in force on the date of its
                publication.
              </p>
              <p>
                By continuing to visit our website and use the Beam app from of
                that date, you will be agreeing to the changes, being bound by
                the same.
              </p>
              <p>
                If you do not want to agree, you should stop visiting our
                website and use our application.
              </p>

              <p>
                <b>2. About Beam</b>
              </p>
              <p>Beam is a fully digital IT solution that comprises:</p>
              <p>
                a) The Beam IT platform, which is a management, marketing tool
                and loyalty, designed for traders, aimed at attracting and
                retaining customers and organize and increase sales of
                commercial establishments.
              </p>
              <p>
                b) The Beam mobile phone application, which works as a store
                catalog and digital wallet, to which consumers can associate
                sources of financing, such as bank cards and from there make
                payments contactless in establishments participating in the Beam
                network.
              </p>
              <p>You can find more information about Beam on our website.</p>

              <p>
                <b>3. Definitions and interpretation</b>
              </p>
              <p>
                a) Agreement: refers to these General Terms and Conditions, as
                well as any policies and documents adjacent to it;
              </p>
              <p>
                b) Beam: is the Beam solution or services, or GBC S.A., or our
                affiliates, or anyone working for us or these entities, or that
                is authorized to act on behalf of Beam or these entities;
              </p>
              <p>
                c) Beam Account: refers to the account that a user opens in our
                application.
              </p>
              <p>
                d) Beam Account Holder: refers to the person who opened and
                maintains an account with us;
              </p>
              <p>
                e) Participating establishments: refers to stores and other
                sales locations that have an agreement in place with Beam under
                which they enable payment for goods and/or services made
                available through the application Beam and Beam credits;
              </p>
              <p>
                f) Beam Credits: refers to the credits that Beam account holders
                acquire when purchasing goods and/or services, using our
                application. Beam credits are immediately available and can be
                used in any participating establishment;
              </p>
              <p>
                g) Beam loyalty credits: these are the credits attributed free
                of charge to the Beam account holder as a reward for their
                loyalty when purchasing goods and/or services of a specific
                participating establishment, under the terms and conditions
                established by that same establishment;
              </p>
              <p>
                h) Beam Vouchers: these are discount vouchers that can only be
                used when purchasing of specific goods and/or services sold in a
                given establishment adherent;
              </p>
              <p>
                i) Beam Products: these are Beam credits, Beam loyalty credits
                and Beam vouchers. They are made available in the user's Beam
                account and can be used through our application;
              </p>
              <p>
                j) Beam Transaction: refers to the acquisition of goods and/or
                services in a participating establishment, using the Beam
                application to carry out the respective payment;
              </p>
              <p>
                k) Reversal or refund: occurs when a financial institution or
                other payment service provider, which issues and/or supports a
                payment method payment from a Beam account holder for the
                purpose of carrying out Beam transactions, determines that the
                amount in question must be returned. The refund or refund
                decision is made independently by the institution financial
                institution or payment service provider that issues or supports
                the payment method. Beam is obliged to follow the instructions
                of this financial institution or payment service provider;
              </p>
              <p>
                l) Bank Card: refers to the credit card or debit card, which the
                user linked to their Beam account;
              </p>
              <p>
                m) Payment Method: refers to bank card or any other source of
                financing that is offered by the user and accepted by Beam as a
                way to settle the purchase price of the product or service in
                the participating establishment;
              </p>
              <p>
                n) Identity proof: refers to the process we carry out to verify
                your identity, in order to comply with KYC requirements (know
                your customer) and the applicable law, particularly in terms of
                combating money laundering and terrorist financing. This process
                may require you to provide us with information and
                documentation;
              </p>
              <p>
                o) Reversal: refers to the situation in which we suspend the
                performance of Beam transactions through a user's Beam account.
                This happens because the financial institution, or payment
                service provider, that issued or supported the user's payment
                method, decided to reverse the payment because you believe it is
                a fraudulent payment;
              </p>
              <p>p) User: any Beam account holder who uses Beam products;</p>
              <p>q) References to the singular mean plural and vice versa;</p>
              <p>
                r) Titles are used for convenience only and do not affect the
                interpretation of this agreement;
              </p>
              <p>
                s) A reference to a document includes the modified document (if
                any) and any document that replaces it;
              </p>
              <p>
                t) The word "person" includes a natural person and any body or
                entity;
              </p>
              <p>u) A reference to a thing includes a part of that thing;</p>
              <p>
                v) A reference to the whole or any part of a statute, rule,
                regulation, decree, or law includes that statute, rule,
                regulation, decree or law as amended, restated, repealed or
                replaced;
              </p>
              <p>
                x) Whenever the word "include" or any other way of expressing
                equivalent to that word is used, it should be interpreted as if
                it were followed by "not limited to".
              </p>

              <p>
                <b>4. Operation of the General Terms and Conditions</b>
              </p>
              <p>
                This agreement is between Beam and users of Beam services,
                setting out the terms and conditions that apply to the use of
                our application, Beam products and our website.
              </p>
              <p>
                Every time you browse and/or use our application and our
                website, or the Beam products, you confirm that you agree to be
                bound by this agreement.
              </p>
              <p>
                If you do not wish to be bound by this agreement, you must stop
                browsing our application or website and to use our application
                and products.
              </p>
              <p>
                This agreement will, however, continue to apply to your prior
                use of our application and Beam products.
              </p>
              <p>
                These General Terms and Conditions, as well as any documents
                that incorporate them, constitute our entire agreement with you
                as user, replacing any other agreements, contracts or other
                statements, whether oral, written or otherwise, previously
                established and published.
              </p>
              <p>
                The invalidity or illegality of any clauses of these General
                Terms and Conditions, does not affect the validity and
                applicability of the rest.
              </p>
              <p>
                Any clause that is invalid, illegal or unenforceable shall be
                considered excluded.
              </p>
              <p>
                We reserve the right to terminate this agreement at any time,
                including, in the event that we terminate an agreement with a
                banking, financial, or another payment service provider that
                currently supports the Beam transactions, or if we cease our
                business operations or, further, if we lose or are unable to
                obtain any licenses, permissions or authorizations necessary for
                the operation of the application and of Beam products.
              </p>

              <p>
                <b>5. Changes</b>
              </p>
              <p>
                We may change the General Terms and Conditions at any time, by
                for example, if we change the functionality of our Beam
                products, or if it is necessary, or required by law.
              </p>
              <p>
                We will publish any revised version of these General Terms and
                Conditions on our website and in the application.
              </p>
              <p>
                Unless otherwise indicated, the revised General Terms and
                Conditions will enter into force as soon as they are published
                on our website and/or application.
              </p>
              <p>
                If our changes reduce your rights or increase your
                responsibilities, we will provide you with at least five
                business days notice advance.
              </p>
              <p>
                By continuing to use our services, our application or our
                website following any changes made to the General Terms and
                Conditions, you agree to respect and be bound by changes.
              </p>
              <p>
                If you do not agree with the changes, you can close your account
                at any time, moment or simply stop using the application,
                website and/or Beam products.
              </p>

              <p>
                <b>6. Newsletter</b>
              </p>
              <p>
                By agreeing to these General Terms and Conditions, you accept,
                automatically receive our newsletter.
              </p>
              <p>
                The newsletter is a free service, which consists of the periodic
                sharing of content associated with the services provided by
                Beam.
              </p>
              <p>
                You can cancel the newsletter service at any time, via
                activate/deactivate option, available in our application and on
                our website, as well as in the newsletters sent.
              </p>
              <p>
                In case of difficulty in canceling the newsletter service
                through indicated options, you can send an email message to the
                address support@beamwallet.com, requesting its cancellation.
              </p>

              <p>
                <b>7. Services</b>
              </p>
              <p>
                Our services consist of accessing and using the Beam mobile
                application, which allow the user to make payments at
                participating stores.
              </p>
              <p>
                Anyone who pays with Beam instantly receives a reward in money
                in your account, without validity or conditions, which can later
                spend at any participating store.
              </p>
              <p>
                Our services include payment collection and payment processing,
                including issuing receipts in the name of participating
                establishments.
              </p>
              <p>
                Beam does not supply the goods and services provided by
                establishments adherents. These are independent third parties,
                not Beam employees.
              </p>

              <p>
                <b>8. Beam Account</b>
              </p>
              <p>
                To open a Beam account, you must provide us with all the
                information requested and ensure that they are always correct.
              </p>
              <p>
                Some information is requested to reduce the risk of fraud or to
                comply with our legal obligations, including combating money
                laundering.
              </p>
              <p>
                In order to use the Beam application to make payments, you must
                provide a payment method or financing source valid card, such as
                a credit card, debit card or other payment method accepted by
                Beam.
              </p>
              <p>
                You authorize us, directly or through third parties, to make any
                inquiries and/or inquiries that we deem necessary to prove your
                identity.
              </p>
              <p>
                This may include requesting a credit report, carrying out other
                credit checks and also verifying the information you provide to
                us against third-party databases.
              </p>
              <p>
                When you open a Beam account and associate a payment method or
                source of financing, you agree that you may be charged a small
                amount, for the purposes of verifying the validity of that
                method or source and identification, which will later be
                returned to you.
              </p>

              <p>
                <b>9. Obligations</b>
              </p>
              <p>If you open and maintain an account with us, you must:</p>
              <p>
                a) Pay any fees associated with the use of Beam products and
                your Beam account;
              </p>
              <p>
                b) Ensure that all information you provide, including data
                contact, are true, accurate, current and complete and that, if
                subject to changes, you will update them;
              </p>
              <p>
                c) Provide, in a timely manner, when requested, all necessary
                documentation, and information regarding your identity or give
                us the necessary authority to we operate your Beam account;
              </p>
              <p>
                d) Do not use your account or Beam products for any illegal
                activity, fraudulent or improper;
              </p>
              <p>
                e) Cooperate fully with us in the event of an investigation of
                any suspected illegal, fraudulent or inappropriate activity on
                your Beam account;
              </p>
              <p>
                f) Know and pay any taxes applicable to payments made you
                effect.
              </p>
              <p>
                g) Do not allow unauthorized third parties to use your Beam
                account;
                <br />– To use our application and visit our website, the user
                needs have an internet connection;
                <br />– Responsibility for obtaining and paying the internet
                connection fee, including mobile data consumption, is
                exclusively up to the user.
              </p>
              <p>
                In addition, the user must take reasonable measures to prevent
                misuse of your account.
              </p>
              <p>
                The user must maintain adequate security and control over any
                device, access credentials and personal identification number or
                code you use to access your Beam account and services.
              </p>
              <p>The user must also comply with all applicable laws.</p>
              <p>
                You may only use the Beam website, application and products to
                lawful activities and for the purposes for which they were
                intended, in accordance with these General Terms and Conditions.
              </p>
              <p>
                You must not misuse the Beam application or attempt to defraud
                Beam, neither participating establishments nor third parties.
              </p>
              <p>
                By agreeing to these General Terms and Conditions you are giving
                authorization to Beam to reveal your profile and information
                about your purchase behavior (made with the Beam account) for
                payment processors that are supported by Beam. You also
                authorize us to reveal this information to regulatory,
                administrative, police and security authorities, with the aim of
                eliminating fraud and illicit behavior.
              </p>
              <p>
                When using the Beam app, website and products, you must not:
              </p>
              <p>a) Violate these General Terms and Conditions;</p>
              <p>b) Violate any law, decree-law, ordinance or regulation;</p>
              <p>
                c) Infringe copyright, patents, trademarks, secrets commercial
                or other intellectual property rights, or copyrights,
                advertising, or privacy, of Beam, participating establishments
                or third parties.
              </p>
              <p>d) Provide false, incorrect or misleading information;</p>
              <p>
                e) Acting fraudulently or engaging in the purchase of
                counterfeit items, stolen, or considered illegal;
              </p>
              <p>
                f) Copy, reproduce, communicate to third parties, alter, modify,
                create works derivatives, publicly display or frame any Beam
                content without due prior written consent;
              </p>
              <p>
                g) Transmit any virus or malicious code that may damage,
                interfere, clandestinely intercept or expropriate any user data,
                or that may interfere with the provision of the application,
                website and Beam products and services, or the affairs of our
                users;
              </p>
              <p>
                h) Take any action that could cause us to lose any of the
                services from our internet service providers, data processors,
                payments or other suppliers or service providers;
              </p>
              <p>
                i) Take any action that unreasonably burdens or
                disproportionately our application, website, software and
                systems operated by us or on our behalf, including any networks
                and servers used to provide any of our services;
              </p>
              <p>
                j) Reveal your Beam account access credentials to third parties,
                nor use someone else's access credentials. Beam is not
                responsible for losses you may incur, including the use of your
                account for any person other than you, arising from the improper
                use of the credentials of access;
              </p>
              <p>
                k) Use, or attempt to use, the Beam services, website and
                application for others purposes other than making payments in
                connection with Beam transactions or management of your account,
                including through tampering, hacking, modification or any other
                form of corruption of the security, or functionality of our
                services, application and website.
              </p>
              <p>
                Our failure to act regarding a security breach or breach
                generated by the user, or by third parties, does not imply any
                waiver of our right to act regarding future breaches and
                security breaches.
              </p>
              <p>
                If you give express permission to a third party to perform
                specific actions on the your name, or to access your Beam
                account information, either through use of that third party's
                products or services, or otherwise, you acknowledge that we may
                disclose, to this third party, the information that expressly
                authorize, granting permission to third parties to access your
                account, regardless of the form, it does not exempt you from any
                of the respective obligations and responsibilities arising from
                these General Terms and Conditions.
              </p>
              <p>
                The user is responsible, before Beam, for the actions that he
                authorizes third parties to accomplish.
              </p>
              <p>
                Furthermore, you acknowledge and agree that you will not hold us
                liable for any risk arising from the actions or omissions of
                this third party in relation to permissions you granted him. If
                this last hypothesis occurs, you should compensate us for the
                resulting losses to Beam.
              </p>

              <p>
                <b>Beam Credits</b>
              </p>
              <p>
                When making payments at participating establishments via Beam
                application, you purchase Beam products (Beam credits) which you
                can then exchange for goods and/or services at participating
                establishments. To do so happens, you need to use our
                application when carrying out transactions. Therefore, when
                using your Beam account to purchase goods and/or services at
                participating establishments, you agree to purchase Beam
                credits.
              </p>

              <p>
                You agree and acknowledge that the acquisition of Beam products
                will only occur, in Beam wallet, when we receive an
                authorization from your payment method payment. All Beam credits
                will remain the property of Beam until that we have received
                your payment in full.
              </p>

              <p>
                If we do not receive payment authorization from your payment
                method payment for proposed Beam transactions, we will not
                process your order.
              </p>

              <p>
                You agree and acknowledge that, once authorization for payment
                of the payment method, you will not be able to revoke or
                withdraw your payment request.
              </p>

              <p>
                The delivery of Beam credits that you have acquired through
                purchases that carried out in participating establishments will
                be carried out through a message sent to your mobile device
                (smartphone). Do you recognize and you agree that the risks in
                Beam credits (including the risk of loss or damage) will pass to
                you immediately, as soon as the message is transmitted
                successfully to your mobile device.
              </p>

              <p>
                If participating establishments refuse or fail to accept the use
                of Beam credits presented by you (except for illegality, fraud,
                or any other reasons set out in these Terms and Conditions, or
                even due to any other conditions of sale agreed between you and
                the establishment), you must notify us in writing of this fact,
                within the maximum period of seven days after refusal.
              </p>

              <p>
                Once we receive this notification, we will contact the
                participating establishment in question in order to obtain a
                solution and to Beam credits bee accepted.
              </p>

              <p>
                If, despite our intervention, Beam credits continue to not be
                accepted by the participating establishment, then we will refund
                the corresponding amount of Beam credits that you were unable to
                use.
              </p>

              <p>
                You confirm and agree that our responsibility to you for any
                Beam credits that the participating merchant refuses to honor
                under the terms described, will be limited to the refund of the
                amounts as mentioned above and that, upon such reimbursement, we
                will be fully exempt from all claims arising from such dishonor
                of Beam credits by the participating establishment.
              </p>

              <p>
                When the Beam credits you decide to use to purchase goods and/or
                services in participating establishments are sufficient to pay
                the entire respective price, no payments will be taken from your
                payment method.
              </p>
              <p>
                On the other hand, regarding the Beam credits that you decide to
                use to purchase goods or services in participating
                establishments are not sufficient to pay all of the respective
                price, but only part of it, we will send a request for
                authorization of your payment method in the amount of remaining.
                Once payment authorization is received by us, we will be
                entitled (either directly or through other providers of payment
                services appointed by us) and, without further need for turn to
                you, debit funds in your name (from your payment method
                applicable) and transfer the funds to us.
              </p>

              <p>
                <b>Refund</b>
              </p>
              <p>
                In certain circumstances, you may be entitled to a refund of
                your payment, relating to Beam transactions.
              </p>

              <p>
                When this happens, the funds related to that refund will be
                returned to you within five business days after Beam receives
                the refund amount from participating establishment. Or, as the
                case may be, within five working days after, if there is a
                failure or refusal of Beam credits by the adherent
                establishment, counting from our intervention.
              </p>

              <p>
                Refunded payments are returned to the payment method used and
                from which they were removed.
              </p>

              <p>
                <b>Beam Account Closure</b>
              </p>
              <p>
                We may terminate your Beam account at any time, including but
                not limited to limited to this, for a violation of these General
                Terms and Conditions.
              </p>

              <p>
                You will be notified by email or via an alert on your mobile
                device or application, of account closure.
              </p>

              <p>
                If your Beam account is closed, we remain obligated to honor any
                Beam transactions that are pending and we will make every effort
                and reasonable measures to ensure that participating
                establishments honor any Beam credits validly purchased by you
                and any refunds of pending payments at the date of closing your
                account.
              </p>

              <p>
                You acknowledge, however, that Beam has no obligation to honor,
                or complete, any new transactions relating to your Beam account.
              </p>

              <p>
                You will remain responsible for all outstanding obligations
                related with your Beam account, before its closure.
              </p>

              <p>
                <b>Warranty</b>
              </p>
              <p>
                We will make every effort possible to ensure that establishments
                members accept Beam credits in exchange for the goods and
                services they make available.
              </p>

              <p>
                We will make every effort possible to ensure that transactions
                carried out through the Beam application, relating to Beam
                products, are processed in a timely manner, but we cannot
                provide guarantees as to the time will be necessary to complete
                this processing, as the completion of the Beam transactions
                depend on factors outside our control, such as delays in the
                banking system or other supported payment channels by the
                application.
              </p>

              <p>
                You acknowledge that access to your Beam account may be
                interrupted or otherwise affected by factors beyond our control,
                such as bad operation, delays and other problems inherent to the
                use of the internet and of other electronic communications and
                that, for this reason, we cannot ensure continuous and
                uninterrupted access to your Beam account.
              </p>

              <p>
                <b>Assignment of Position</b>
              </p>
              <p>
                You may not assign, subcontract or transfer these General Terms
                and Conditions, or any rights or obligations arising therefrom,
                in whole or in part, to third parties.
              </p>

              <p>
                Beam may, in whole or in part, assign, subcontract or transfer
                these General Terms and Conditions, or any right or obligation
                arising therefrom, without your prior consent, to third parties.
              </p>

              <p>
                <b>User Responsibility</b>
              </p>
              <p>
                If we consider that you have failed to comply with any of the
                provisions of these Terms and General Conditions, we may
                terminate this contract and limit, terminate or suspend your
                account, as well as refuse to provide our services in the
                future.
              </p>

              <p>We may at any time suspend, limit or terminate your access:</p>

              <p>
                a) Our application, websites, software or systems, including any
                networks and servers used to provide any of the Beam services,
                operated by us or on our behalf;
              </p>

              <p>
                b) Your Beam account or any of the Beam services, including the
                limitation your ability to pay or send money using any of the
                payment methods associated with your Beam account.
              </p>

              <p>
                We may refuse any payment transaction at any time for any
                reason, and it is only necessary to indicate the basis and
                reasons refusal, as well as how you can resolve the problem, if
                possible, upon request and provided that this is not prohibited
                by law.
              </p>

              <p>
                Nothing in these General Terms and Conditions limits or excludes
                any liability that cannot be legally limited or excluded, nor
                does it alter your rights that cannot be excluded by applicable
                law. You will be responsible for any damages suffered by us as a
                result of the failure on your part to comply with these General
                Terms and Conditions, bad your use of the website, the Beam
                application, the services and Beam credits, or your failure to
                comply with any laws or rights of third parties.
              </p>

              <p>
                You will be responsible for all activities carried out through
                your account. You agree to compensate us for any damage that may
                arise to us in consequence of third party access to your Beam
                account, caused by your failure to protect your access
                credentials. You must comply with the implementation and usage
                requirements contained in the application, in website and in all
                documentation that accompanies our services and Beam products.
                If you don't meet our implementation requirements and use, you
                will be responsible for all damages you suffer, as well as
                damages that Beam and third parties suffer.
              </p>

              <p>
                You are responsible for all cancellations, refunds, returns,
                complaints, commissions, fines, penalties and other
                responsibilities incurred by Beam, by any Beam user, or by any
                third party, caused or arising your violation of these General
                Terms and Conditions and/or your use of Beam services,
                regardless of termination, suspension or closure thereof.
                Therefore, you agree to reimburse Beam, or third parties, for
                any and all damages, expenses or losses arising from this
                situation.
              </p>

              <p>
                <b>16. Responsibility of the Participating Establishment</b>
              </p>
              <p>
                Even if you pay the respective price through the Beam
                application and or using Beam credits, the user acknowledges
                that the establishment member is the sole seller of the goods
                and/or services that he/she purchases there. As such, the
                participating establishment is fully and exclusively responsible
                for any and all losses, damages, injuries, illnesses and costs
                that the user may suffer as a result of the delivery,
                non-delivery or use of such goods and/or services.
              </p>

              <p>
                <b>17. Beam Responsibility</b>
              </p>
              <p>
                Beam assumes responsibility for Beam credits, as provided in
                these General Terms and Conditions. Beam is not legally
                responsible for illegal information stored and made available on
                the Beam application at the request of the establishment owner
                member, as long as he was not aware of their illegality.
              </p>

              <p>
                Beam will also not be responsible if it removed the illegal
                information as soon as was aware of its illegality. Beam is not
                obligated to actively monitor and investigate the information
                provided by the participating trader, namely to assess whether
                the whether they are illegal or not. You agree to exempt Beam,
                including our administrators, representatives, workers and
                collaborators, from any responsibility in relation to any claim,
                demand or claim, including legal costs, presented by third
                parties, arising from:
              </p>

              <p>a) Your violation of these General Terms and Conditions;</p>

              <p>
                b) The misuse you made of the website application and/or
                products Beam;
              </p>

              <p>
                c) Your violation of any law or the rights of third parties;
              </p>

              <p>
                d) The actions, or omissions, of any third party to whom you
                have granted permission to use your Beam account.
              </p>

              <p>
                You agree that we are not responsible for any loss or damage
                that result, directly or indirectly, from access to your Beam
                account by third parties unauthorized, resulting from failure to
                protect access credentials to the your account that was not
                caused by Beam.
              </p>

              <p>
                You agree not to hold Beam liable for any damages arising from
                errors or omissions in the information contained in the
                application, or on the website and for any damages or viruses
                that may infect your device, or other property, by virtue of
                accessing or browsing the application or website.
              </p>

              <p>
                Beam is not responsible for any damages or losses, including
                money, credibility, reputation, profits or others, resulting,
                directly or indirectly, from your use of, or inability to use,
                our application, our website, software, systems, or any of the
                credits, products or services we provide.
              </p>

              <p>
                We do not own, control, nor have any responsibility for your use
                of any third-party software application in connection with the
                Beam website, application, services and products.
              </p>

              <p>
                Beam is not responsible for any losses, damages, injuries,
                illnesses and costs that the user may suffer as a result of
                delivery, non-delivery, or the use of goods or services
                purchased from participating establishments.
              </p>

              <p>
                Any liability that may be borne by Beam In any case, any
                liability of Beam or anyone else of our administrators,
                employees and/or collaborators towards you or towards third
                parties will always be limited to the amount we receive from
                your payment method, relating to the Beam transaction in
                question.
              </p>

              <p>
                <b>18. Illegal Content</b>
              </p>
              <p>
                Any person, including users and any entities that consider to
                exist, on our website and/or in our application, including in
                spaces used by participating establishments, information that
                are illegal, they must notify Beam by sending an email message
                email to reports@beamwallet.com, containing the following
                elements:
              </p>

              <p>
                a) Concrete and individualized indication of the information
                that you consider illegal;
              </p>

              <p>
                b) Reasoned explanation of the reasons why you consider that the
                information in question is illegal;
              </p>

              <p>
                c) Indication of the exact electronic location of that
                information, such as the exact URL address and any other data
                relevant to this purpose;
              </p>

              <p>
                d) Your name and email address, except if the information you
                provide considers it illegal to involve one of the crimes
                referred to in articles 3 to 7 of the Directive no. 2011/93/EU;
              </p>

              <p>
                e) Declaration confirming your good faith and that the
                information and allegations made by referred to are accurate and
                complete.
              </p>

              <p>
                Beam will notify users or reporting entities of the decision for
                you adopted regarding the complaint, as well as the
                possibilities for reparation relating to that decision.
              </p>

              <p>
                <b>19. Intellectual Property</b>
              </p>
              <p>
                You acknowledge that all rights in our software and any other
                intellectual property elements linked to the website,
                application, Beam products and/or services are our property.
              </p>

              <p>
                You agree to grant Beam a non-exclusive, worldwide, royalty-free
                right royalties, irrevocable and licensable, from exercising
                property rights intellectual, advertising and database
                information about your information, with the in order to provide
                you with our Beam services and products.
              </p>

              <p>
                If you use Beam software that you downloaded to your device,
                website, or platform, you will be granted a revocable license,
                not exclusive and non-transferable use of our software, in
                accordance with these General Terms and Conditions and with any
                other information and documentation provided to us regarding the
                use and integration of said software.
              </p>

              <p>
                The license includes the software and all its updates, new
                versions and replacement software. Any software application
                belonging to third parties that you use in connection with the
                Beam website, application, services and products is subject to
                license you agreed to. You may not rent, assign or in any way
                transfer the rights relating to the Beam software we provide to
                you.
              </p>

              <p>
                You agree not to alter, reproduce, adapt, distribute, display,
                publish, make reverse engineer, translate, disassemble, or
                otherwise attempt to create any source code derived from the
                Beam software.
              </p>

              <p>
                <b>20. Applicable law</b>
              </p>
              <p>
                These General Terms and Conditions must be interpreted in
                accordance with Portuguese law, by which they are governed.
              </p>

              <p>
                <b>21. Dispute Resolution</b>
              </p>
              <p>
                Our main objective is to prevent and avoid conflicts. If this is
                not possible and conflicts exist, then we ask that you get in
                touch with us by sending an email describing the situation to
                support@beamwallet.com so that we can find a solution.
              </p>

              <p>
                Any complaint or report related to the refusal of a
                participating establishment to accept payments with Beam, or to
                accept the use of Beam credits, must first be reported through
                the option existing in the Beam application.
              </p>

              <p>
                All conflicts, complaints and claims arising within the scope of
                these General Terms and Conditions Prescribe within one month of
                taking knowledge of the circumstances that gave rise to it, or
                of the date on which you should have been aware of these
                circumstances.
              </p>

              <p>
                <b>22. Arbitration</b>
              </p>
              <p>
                If conflicts are not resolved within thirty days after being
                reported under the terms mentioned above, then either party may
                resort to the arbitration mechanism, in accordance with the
                Rules of the Arbitration by the Portuguese Chamber of Commerce
                and Industry in Lisbon.
              </p>

              <p>
                The number of arbitrators is 1, which in the absence of
                agreement between the parties will be chosen according to the
                aforementioned rules.
              </p>

              <p>
                The place of arbitration will be in Lisbon and the language used
                in the arbitration will be English. The arbitrator's decision
                will be final and binding.
              </p>

              <p>
                <b>23. Forum</b>
              </p>
              <p>
                The Cascais judicial court is exclusively competent to resolve
                any dispute arising from these General Terms and Conditions,
                with express waiver of any other.
              </p>

              <p>
                <b>24. Communication and Notifications</b>
              </p>
              <p>
                You agree that these General Terms and Conditions and any notice
                related to your Beam account and/or your use of the application,
                Beam website, services and products will be available on the
                website or in the application, or they may be sent to you by
                email, depending on we consider to be more appropriate.
              </p>

              <p>
                You will need to have access to the internet and an email
                account to receive communications and information regarding our
                services. There is, also, the possibility of communicating with
                you by postal mail, although not we are obliged.
              </p>

              <p>
                The notifications we send you by message to your mailbox
                electronic form that you indicated to us will be considered
                delivered on the day following the day of sending, unless the
                message is immediately returned by the email server.
              </p>

              <p>
                If notification is sent by post to the address you provided, it
                will be considered delivered on the third day after the day of
                dispatch.
              </p>

              <p>
                <b>25. Single Points of Contact</b>
              </p>
              <p>
                Except where otherwise follows from these General Terms and
                Conditions, or expressly declared by us, any communication you
                want to us sent must be in the form of an email message, with
                sent to support@beamwallet.com.
              </p>

              <p>
                Authorities wishing to communicate with Beam on matters related
                to the application of Parliament Regulation (EU) 2022/2065
                European Union and the Council of 19 October 2022, they must do
                so by post electronically, to the address legal@beamwallet.com.
              </p>

              <p>
                <b>26. Privacy</b>
              </p>
              <p>
                We collect, use and disclose information about you as described
                in these General Terms and Conditions and in the Privacy Policy,
                available at our application and on our website.
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};

export default TermsPage;
