import styles from "./page.module.css";

export default function ConditionsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Refund and Dispute Policy</h1>

      <p className={styles.paragraph}>
        <strong>Effective Date:</strong> January 20, 2025
      </p>

      <p className={styles.paragraph}>
        At SAUERAPPLE LLC, we are committed to providing high-quality products
        and services to our customers. Your satisfaction is our priority, and we
        strive to resolve any issues quickly and fairly. We aim to respond to
        all inquiries within 48 hours and resolve most issues within 7 business
        days. This Refund and Dispute Policy outlines the terms under which
        refunds are provided and disputes are resolved.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Refund Policy</h2>

        <h3 className={styles.subsectionTitle}>1.1 Eligibility for Refunds</h3>
        <p>Refunds are available under the following circumstances:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Damaged or Defective Products:</strong> If you receive a
            damaged or defective product, you may request a refund within 14
            days of receiving the product. Return shipping costs for damaged or
            defective products will be covered by the company.
          </li>
          <li className={styles.listItem}>
            <strong>Service Not Delivered:</strong> If a service you purchased
            was not delivered as promised, you may request a refund within 14
            days from the expected delivery date.
          </li>
          <li className={styles.listItem}>
            <strong>Incorrect Product or Service:</strong> If you receive the
            wrong product or service, you are eligible for a refund upon
            returning the incorrect item or providing proof of the error.
          </li>
        </ul>

        <h3 className={styles.subsectionTitle}>
          1.2 Non-Refundable Items and Services
        </h3>
        <p>The following are not eligible for refunds:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Digital products or services once accessed (e.g., login or
            activation) or downloaded.
          </li>
          <li className={styles.listItem}>
            Products marked as final sale or non-refundable.
          </li>
          <li className={styles.listItem}>
            Subscriptions or memberships beyond the trial period.
          </li>
          <li className={styles.listItem}>
            Custom or personalized items, unless defective.
          </li>
        </ul>

        <h3 className={styles.subsectionTitle}>1.3 Refund Process</h3>
        <p>To request a refund:</p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            Contact our customer service team at{" "}
            <a href="mailto:info@sauerapple.com" className={styles.link}>
              info@sauerapple.com
            </a>{" "}
            with your order details and reason for the refund.
          </li>
          <li className={styles.listItem}>
            Provide any supporting documentation, such as photos of defective
            products or proof of non-delivery.
          </li>
          <li className={styles.listItem}>
            Once approved, refunds will be processed to your original payment
            method within 7-10 business days.
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Dispute Resolution</h2>

        <h3 className={styles.subsectionTitle}>2.1 Initiating a Dispute</h3>
        <p>
          If you have concerns or disputes regarding your purchase, please
          follow these steps:
        </p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            Contact our customer service team at{" "}
            <a href="mailto:info@sauerapple.com" className={styles.link}>
              info@sauerapple.com
            </a>{" "}
            to explain the issue and provide supporting evidence.
          </li>
          <li className={styles.listItem}>
            Allow our team up to 5 business days to investigate and respond to
            your concern.
          </li>
        </ol>

        <h3 className={styles.subsectionTitle}>2.2 Escalation Process</h3>
        <p>If you are not satisfied with our resolution:</p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            Request escalation to a manager or supervisor.
          </li>
          <li className={styles.listItem}>
            If the matter remains unresolved, you may file a formal dispute
            through your payment processor (e.g., PayPal, Stripe, or credit card
            company).
          </li>
        </ol>

        <h3 className={styles.subsectionTitle}>2.3 Binding Arbitration</h3>
        <p>
          By using our services, you agree to resolve disputes through binding
          arbitration rather than in court, except where prohibited by law.
          Arbitration is a private process where a neutral third party makes a
          binding decision to resolve the dispute, often quicker and with fewer
          costs than court proceedings. Arbitration will be conducted in
          accordance with applicable arbitration rules (e.g., the American
          Arbitration Association).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Additional Terms</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            We reserve the right to refuse a refund or dispute request if there
            is evidence of misuse, fraud, or policy violation.
          </li>
          <li className={styles.listItem}>
            This policy is subject to change. We will notify users of
            significant changes via email or by posting an announcement on our
            website at least 14 days before the changes take effect. Updated
            policies will be posted on our website with the effective date.
          </li>
        </ul>
      </section>

      <hr className={styles.divider} />

      <p className={styles.paragraph}>
        For further questions or concerns, please contact us at{" "}
        <a href="mailto:info@sauerapple.com" className={styles.link}>
          info@sauerapple.com
        </a>
        .
      </p>
    </div>
  );
}
