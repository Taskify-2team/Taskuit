import AuthInput from '@/components/Input/AuthInput'
import TextInput from '@/components/Input/TextInput'
import Textarea from '@/components/Input/Textarea'

export default function test() {
  const error = {
    message: 'ddd',
  }

  return (
    <div>
      <TextInput id="0" label="dddd" placeholder="dfsdf" />
      <Textarea id="0" label="dddd" placeholder="dfsdf" />
      <AuthInput id="1" label="dd" placeholder="111" type="email" />
      <AuthInput id="2" label="dd" placeholder="111" type="password" />
      <AuthInput id="3" label="dd" placeholder="111" type="email" error={error} />
    </div>
  )
}
