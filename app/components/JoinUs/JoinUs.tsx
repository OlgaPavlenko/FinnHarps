import * as Yup from "yup";

import {
  Field,
  Form,
  Formik,
  type FormikErrors,
  type FormikHelpers,
  type FormikTouched,
} from "formik";

import { formFields } from "../../constants";
import styles from "./JoinUs.module.scss";

interface Values {
  parentFirstName: string;
  parentLastName: string;
  firstName: string;
  lastName: string;
  birth: string;
  phone: string;
}

const sendEmail = async (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  try {
    const response = await fetch("http://localhost:3000/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send email.");
  } finally {
    setSubmitting(false);
  }
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  parentFirstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  parentLastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  birth: Yup.string()
    .required("Required")
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Date of Birth must follow the format DD/MM/YYYY"
    ),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
});

const JoinUs = () => {
  // const onSubmitButton = async (
  //   values: Values,
  //   { setSubmitting, resetForm }: Function,
  // ) => {
  //   console.log('onSubmitButton');

  //   try {
  //     // Sending data to API
  //     // const response = await axios.post('/api/sendEmail', values);
  //     console.log('Your application has been submitted successfully!');
  //     // alert('Your application has been submitted successfully!');
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const renderFormFields = ({
    errors,
    touched,
  }: {
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
  }) => (
    <Form className={styles.form}>
      <p className={styles.paragraph}>
        Administrator of our academy will contact you by phone or email you to
        discuss your application
      </p>
      {formFields.map(({ id, name, placeholder }) => (
        <div key={id} className={styles.fieldWrap}>
          {errors[name as keyof Values] && touched[name as keyof Values] ? (
            <div className={styles.error}>{errors[name as keyof Values]}</div>
          ) : null}

          <Field
            id={id}
            name={name}
            placeholder={placeholder}
            className={styles.field}
          />
        </div>
      ))}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </Form>
  );

  return (
    <section className={styles.joinUs} id="anchor_join">
      <div className={styles.container}>
        {/* <div className={styles.wrap}> */}
        <h1 className={styles.header}>Join our team</h1>

        <div className={styles.formWrap} id="register">
          <Formik
            initialValues={{
              parentFirstName: "",
              parentLastName: "",
              firstName: "",
              lastName: "",
              birth: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={sendEmail}
          >
            {renderFormFields}
          </Formik>

          <div className={styles.imgWrap}>
            <img
              src="/formImg.jpg"
              alt={"form image"}
              width={800}
              height={600}
              className={styles.img}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default JoinUs;
