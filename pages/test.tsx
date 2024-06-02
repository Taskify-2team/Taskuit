import AuthInput from '@/components/Input/AuthInput'

export default function test() {
  const error = {
    message: 'ddd',
  }

  return (
    <div>
      <AuthInput id="1" label="dd" placeholder="111" type="email" />
      <AuthInput id="2" label="dd" placeholder="111" type="password" />
      <AuthInput id="3" label="dd" placeholder="111" type="email" error={error} />
    </div>
  )
}
