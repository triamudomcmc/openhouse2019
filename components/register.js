import styled from 'styled-components'
import React from 'react'
import QRCode from '../lib/qr'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { api } from '../lib/api'

import { Box } from './design/ui'

import { TypographicContext } from './design'

const Parent = styled.div`
  transform: translateY(0);
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

const RegForm = props => {
  return (
    <Formik
      initialValues={{
        prefix: 'mister',
        name: '',
        lastname: '',
        email: '',
        type: 'student',
        stdyear: ''
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
        <div
          className="nes-field"
          style={{
            fontFamily: 'Noto Sans Thai UI, Noto Sans',
            fontWeight: '600'
          }}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="prefix">คำนำหน้าชื่อ</label> <br />
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
              <span>นาย</span>
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
              <span>นางสาว</span>
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
              <span>นาง</span>
            </label>
            <label>
              <input
                name="prefix"
                type="radio"
                value="master"
                checked={values.prefix === 'master'}
                onChange={handleChange}
                className="nes-radio"
                onBlur={handleBlur}
              />
              <span>เด็กชาย</span>
            </label>
            <label>
              <input
                name="prefix"
                type="radio"
                value="miss(child)"
                checked={values.prefix === 'miss(child)'}
                onChange={handleChange}
                className="nes-radio"
                onBlur={handleBlur}
              />
              <span>เด็กหญิง</span>
            </label>
            <br />
            <label htmlFor="name">ชื่อ</label>
            <input
              name="name"
              className={
                errors.name && touched.name ? 'nes-input is-error' : 'nes-input'
              }
              placeholder="Name"
              onChange={handleChange}
              value={values.name || ''}
            />
            <br />
            <label htmlFor="lastname">นามสกุล</label>
            <input
              name="lastname"
              className={
                errors.lastname && touched.lastname
                  ? 'nes-input is-error'
                  : 'nes-input'
              }
              placeholder="Lastname"
              onChange={handleChange}
              value={values.lastname || ''}
            />
            <br />
            <label htmlFor="email">อีเมล</label>
            <input
              name="email"
              className={
                errors.email && touched.email
                  ? 'nes-input is-error'
                  : 'nes-input'
              }
              type="email"
              placeholder="Email"
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
              <span>นักเรียน</span>
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
              <span>ผู้ปกครอง</span>
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
              <span>ครู/อาจารย์</span>
            </label>{' '}
            <label>
              <input
                name="type"
                type="radio"
                value="others"
                checked={values.type === 'others'}
                onChange={handleChange}
                className="nes-radio"
                onBlur={handleBlur}
              />
              <span>อื่น ๆ</span>
            </label>
            <br />
            {values.type === 'student' && (
              <React.Fragment>
                <label htmlFor="stdyear">ระดับการศึกษา</label>
                <br />
                <select name="stdyear" onChange={handleChange}>
                  <option value="p1-3">ประถมศึกษาตอนต้น</option>
                  <option value="p4-6">ประถมศึกษาตอนปลาย</option>
                  <option value="m1">มัธยมศึกษาปีที่ 1</option>
                  <option value="m2">มัธยมศึกษาปีที่ 2</option>
                  <option value="m3">มัธยมศึกษาปีที่ 3</option>
                  <option value="highschool">มัธยมศึกษาตอนปลาย</option>
                  <option value="others">อื่น ๆ</option>
                </select>
              </React.Fragment>
            )}
            <br />
            <button
              className={
                isSubmitting ? 'nes-btn is-disabled' : 'nes-btn is-primary'
              }
              type="submit"
              disabled={isSubmitting}
              style={{ fontWeight: '700' }}
            >
              ลงทะเบียน
            </button>
          </form>
        </div>
      )}
    </Formik>
  )
}

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

  downloadQRCode = async () => {
    const link = document.createElement('a')
    const blob = await new Promise((res, rej) => {
      const canvas = document.getElementById('qrcanvas')
      canvas.toBlob(bl => {
        res(bl)
      })
    })
    link.href = URL.createObjectURL(blob)
    link.download = 'OpenHouseQR.png'
    link.dispatchEvent(
      new MouseEvent(`click`, { bubbles: true, cancelable: true, view: window })
    )
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <Parent>
            <Box title="Register">
              {this.state.key === '' ? (
                <RegForm
                  submitToFirebase={this.submitToFirebase}
                  handleDropdown={this.handleDropdown}
                />
              ) : (
                <div>
                  <TypographicContext>
                    <p style={{ color: 'red' }}>
                      โปรดเก็บ QR Code ไว้ยืนยันตัวตนหน้างาน
                    </p>
                  </TypographicContext>
                  <QRCode value={this.state.key} />
                  <br />
                  <button
                    onClick={this.downloadQRCode}
                    className="nes-btn is-success"
                    style={{ marginTop: '25px' }}
                  >
                    Download QRCode
                  </button>
                  <TypographicContext>
                    <a
                      onClick={() => this.setState({ key: '' })}
                      style={{ color: 'grey' }}
                    >
                      ลงทะเบียนอีกครั้ง
                    </a>
                  </TypographicContext>
                </div>
              )}
            </Box>
          </Parent>
        </div>
      </section>
    )
  }
}
