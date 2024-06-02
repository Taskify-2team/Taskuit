interface TextInputProps {
  label: string
  placeholder: string
  isRequired?: boolean
}

export default function TextInput({ label, placeholder, isRequired }: TextInputProps) {
  return (
    <label htmlFor="id" className="flex flex-col gap-[1rem]">
      <span className="text-[1.8rem]">
        {label} {isRequired && <b className="text-[1.8rem] text-primary-violet">*</b>}
      </span>
      <input
        id="id"
        placeholder={placeholder}
        required={isRequired}
        className="rounded-[0.6rem] border-[0.1rem] border-var-gray3 px-[1.6rem] py-[1.2rem] text-[1.6rem] outline-none hover:border-primary-violet"
      />
    </label>
  )
}
