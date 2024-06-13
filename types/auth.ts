export interface AuthThemeButtonProps {
  theme: string
  handleSetTheme: () => void
}

export interface LogInFormValueType {
  id: string
  password: string
}

export interface SignUpFormValueType {
  id: string
  password: string
  nickname: string
  passwordConfirm: string
  agreeTerms: boolean
}
