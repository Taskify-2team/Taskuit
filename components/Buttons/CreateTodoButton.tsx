import Image from 'next/image'

export default function CreateTodoButton() {
  return (
    <div className="lg:w-[31.4rem] w-[54.4rem] h-[4rem] border border-solid rounded-[0.6rem] flex justify-center items-center cursor-pointer">
      <div className="w-[2.2rem] h-[2.2rem] bg-[--violet-violet-8] rounded-[0.4rem] relative p-[0.3rem] border-[--gray-gray_D9D9D9]">
        <Image src="/icons/addLogo.svg" alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
