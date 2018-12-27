/*eslint no-console: ["error", { allow: ["error"] }] */
import styled from 'styled-components'
import React from 'react'
import { ParallaxLayer } from 'react-spring/addons.cjs'
import QRCode from 'qrcode.react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { api } from '../lib/api'

import { Box } from './design/ui'

import { TypographicContext } from './design'
import { XS_MOBILE, MOBILE } from './design/withViewType'

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

const RegForm = props => (
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
      props.submitToFirebase(values, resetForm)
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
      <div className="nes-field">
        <form onSubmit={handleSubmit}>
          <label htmlFor="prefix">Prefix</label> <br />
          <label>
            <input
              name="prefix"
              type="radio"
              value="mister"
              checked={values.prefix === 'mister'}
              onChange={handleChange}
              className="nes-radio"
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
              className="nes-radio"
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
              className="nes-radio"
              onBlur={handleBlur}
            />
            <span>Mrs</span>
          </label>
          <br />
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className={
              errors.name && touched.name ? 'nes-input is-error' : 'nes-input'
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
                ? 'nes-input is-error'
                : 'nes-input'
            }
            onChange={handleChange}
            value={values.lastname || ''}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className={
              errors.email && touched.email ? 'nes-input is-error' : 'nes-input'
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
              className="nes-radio"
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
              className="nes-radio"
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
              className="nes-radio"
              onBlur={handleBlur}
            />
            <span>Teacher</span>
          </label>
          <br />
          {values.type === 'student' && (
            <div>
              <label htmlFor="stdyear">Student&apos;s Year</label>
              <input
                name="stdyear"
                className={
                  errors.stdyear && touched.stdyear
                    ? 'nes-input is-error'
                    : 'nes-input'
                }
                onChange={handleChange}
                value={values.stdyear || ''}
              />
            </div>
          )}
          <br />
          <button
            className={
              isSubmitting ? 'nes-btn is-disabled' : 'nes-btn is-primary'
            }
            type="submit"
            disabled={isSubmitting}
          >
            Register!
          </button>
        </form>
      </div>
    )}
  </Formik>
)

export class Register extends React.PureComponent {
  state = {
    key: ''
  }
  submitToFirebase = async (values, resetForm) => {
    try {
      const res = await api.post(
        '  https://asia-northeast1-triamudomopenhouse2019.cloudfunctions.net/registration/register ',
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
  resetKey = () => {
    this.setState({ key: '' })
  }
  render() {
    return (
      <ParallaxLayer
        offset={
          this.props.viewType === XS_MOBILE
            ? 6
            : this.props.viewType === MOBILE
            ? 5
            : 3
        }
        factor={1}
        speed={0.5}
      >
        <Parent>
          <Box title="Register">
            {this.state.key === '' ? (
              <RegForm submitToFirebase={this.submitToFirebase} />
            ) : (
              <div>
                <TypographicContext>
                  <h3 id="regtxt">โปรดเก็บ QR Code ไว้ยืนยันตัวตนหน้างาน</h3>
                  <QRCode value={this.state.key} />
                  <p>โดยสามารถดาวน์โหลดสูจิบัตรได้ที่นี่</p>
                </TypographicContext>
                <button className="nes-btn">Download!</button>
                <TypographicContext>
                  <br />
                  <a
                    onClick={() => this.setState({ key: '' })}
                    style={{ color: 'gray' }}
                  >
                    ลงทะเบียนอีกครั้ง
                  </a>
                </TypographicContext>
              </div>
            )}
          </Box>
        </Parent>
      </ParallaxLayer>
    )
  }
}
