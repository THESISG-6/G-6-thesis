import { useState } from 'react'

export const useHook = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [gender, setGender] = useState('Male')
  const [mobileNumber, setMobileNumber] = useState('')
  const [yearGraduated, setYearGraduated] = useState('')
  const MAX_MOBILE_DIGITS = 11
  const [showFormFirst, setShowFormFirst] = useState(true)
  const [employmentStatus, setEmploymentStatus] = useState('Employed')
  const [jobDuration, setJobDuration] = useState('')
  const [EmploymentType, setEmploymentType] = useState('')
  const [furtherStudies, setFurtherStudies] = useState('NO')
  const [otherStudiesDescription, setOtherStudiesDescription] = useState('')
  const [enrollFurtherStudies, setEnrollFurtherStudies] = useState(
    'With Doctoral Units'
  )
  const [otherEnrollDescription, setOtherEnrollDescription] = useState('')
  const [eligibilityAcquired, setEligibilityAcquired] = useState(
    'Bar and Board Examination Eligibility'
  )
  const [otherEligibilityDescription, setOtherEligibilityDescription] =
    useState('')

  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    setEmail(inputValue)

    const isValid = inputValue.includes('@') && inputValue.includes('.com')
    setIsEmailValid(isValid)
  }

  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value
    const cleanedValue = inputValue.replace(/\D/g, '')

    if (!isNaN(cleanedValue) && cleanedValue.length <= MAX_MOBILE_DIGITS) {
      setMobileNumber(cleanedValue)
    }
  }

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value
    setPassword(inputValue)

    const hasUppercase = /[A-Z]/.test(inputValue)
    const hasLowercase = /[a-z]/.test(inputValue)
    const hasSpecialChar = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(inputValue)

    const isValid =
      hasUppercase && hasLowercase && hasSpecialChar && inputValue.length >= 8

    setIsPasswordValid(isValid)
  }

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value
    setConfirmPassword(inputValue)
  }

  const handleNextButtonClick = () => {
    if (
      email &&
      isEmailValid &&
      mobileNumber &&
      yearGraduated &&
      isPasswordValid &&
      password === confirmPassword
    ) {
      setShowFormFirst(false)
    }
  }

  const handleBackButtonClick = () => {
    setShowFormFirst(true)
  }

  return {
    gender,
    setGender,
    setYearGraduated,
    showFormFirst,
    employmentStatus,
    setEmploymentStatus,
    jobDuration,
    setJobDuration,
    EmploymentType,
    setEmploymentType,
    furtherStudies,
    setFurtherStudies,
    otherStudiesDescription,
    setOtherStudiesDescription,
    enrollFurtherStudies,
    setEnrollFurtherStudies,
    otherEnrollDescription,
    setOtherEnrollDescription,
    eligibilityAcquired,
    setEligibilityAcquired,
    otherEligibilityDescription,
    setOtherEligibilityDescription,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    currentAddress,
    setCurrentAddress,
    dateOfBirth,
    setDateOfBirth,
    handleEmailChange,
    handleMobileNumberChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNextButtonClick,
    handleBackButtonClick,
    mobileNumber,
    yearGraduated,
    email,
    isEmailValid,
    password,
    isPasswordValid,
    confirmPassword,
  }
}