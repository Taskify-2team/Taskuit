import Image from 'next/image'

export default function CreateTodoButton() {
  return (
    <div className="flex h-[4rem] w-[54.4rem] cursor-pointer items-center justify-center rounded-[0.6rem] border border-solid lg:w-[31.4rem]">
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-[--gray-gray_D9D9D9] bg-[--violet-violet-8] p-[0.3rem]">
        <Image src="/icons/addLogo.svg" alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
