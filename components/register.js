import styled from 'styled-components'
import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import axios from 'axios'
import QRCode from 'qrcode.react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TypographicContext } from './design'

import { MOBILE } from './design/withViewType'

const Parent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`

const SignupSchema = Yup.object().shape({
  prefix: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Need to be email!')
    .required('Required!'),
  type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

export class Register extends React.PureComponent {
  state = {
    key: ''
  }
  submitToFirebase = async (values, resetForm) => {
    try {
      const res = await axios.post(
        ' https://asia-northeast1-triamudomopenhouse2019.cloudfunctions.net/registration/register ',
        {
          prefix: values.prefix,
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          type: values.type,
          studentYear: values.stdyear
        }
      )
      this.setState({ key: res.data })
      resetForm({})
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <ParallaxLayer
        offset={this.props.viewType === MOBILE ? 5 : 2}
        factor={this.props.viewType === MOBILE ? 1.5 : 1}
        speed={0.5}
      >
        <Parent>
          <div className="container with-title is-light">
            <h1 className="title">Register</h1>
            <Formik
              initialValues={{
                prefix: 'mister',
                name: '',
                lastname: '',
                email: '',
                type: 'student',
                stdyear: ' '
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                this.submitToFirebase(values, resetForm)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <div className="field">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="prefix">Prefix</label> <br />
                    <label>
                      <input
                        name="prefix"
                        type="radio"
                        value="mister"
                        checked={values.prefix === 'mister'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Mister</span>
                    </label>{' '}
                    <label>
                      <input
                        name="prefix"
                        type="radio"
                        value="miss"
                        checked={values.prefix === 'miss'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Miss</span>
                    </label>{' '}
                    <label>
                      <input
                        name="prefix"
                        type="radio"
                        value="mrs"
                        checked={values.prefix === 'mrs'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Mrs</span>
                    </label>
                    <br />
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      className={
                        errors.name && touched.name ? 'input is-error' : 'input'
                      }
                      onChange={handleChange}
                      value={values.name || ''}
                    />
                    <br />
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      name="lastname"
                      className={
                        errors.lastname && touched.lastname
                          ? 'input is-error'
                          : 'input'
                      }
                      onChange={handleChange}
                      value={values.lastname || ''}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      className={
                        errors.email && touched.email
                          ? 'input is-error'
                          : 'input'
                      }
                      onChange={handleChange}
                      value={values.email || ''}
                    />
                    <br />
                    <label>
                      <input
                        name="type"
                        type="radio"
                        value="student"
                        checked={values.type === 'student'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Student</span>
                    </label>{' '}
                    <label>
                      <input
                        name="type"
                        type="radio"
                        value="parent"
                        checked={values.type === 'parent'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Parent</span>
                    </label>{' '}
                    <label>
                      <input
                        name="type"
                        type="radio"
                        value="teacher"
                        checked={values.type === 'teacher'}
                        onChange={handleChange}
                        className="radio"
                        onBlur={handleBlur}
                      />
                      <span>Teacher</span>
                    </label>
                    <br />
                    {values.type === 'student' && (
                      <div>
                        <label htmlFor="stdyear">Student's Year</label>
                        <input
                          name="stdyear"
                          className={
                            errors.stdyear && touched.stdyear
                              ? 'input is-error'
                              : 'input'
                          }
                          onChange={handleChange}
                          value={values.stdyear || ''}
                        />
                      </div>
                    )}
                    <br />
                    <button
                      className="btn is-primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Register!
                    </button>
                  </form>
                </div>
              )}
            </Formik>
            {this.state.key && (
              <div>
                <TypographicContext>
                  <h4 id="regtxt">โปรดเก็บ QR Code ไว้ยืนยันตัวตนหน้างาน</h4>
                </TypographicContext>
                <QRCode value={this.state.key} />
              </div>
            )}
          </div>
        </Parent>
      </ParallaxLayer>
    )
  }
}
