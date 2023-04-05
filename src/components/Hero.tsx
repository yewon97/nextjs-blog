import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.jpg'

export default function Hero() {
	return (
		<section className='text-center'>
			<div className='w-64 h-64 relative mx-auto'>
				<Image className='rounded-full mx-auto' src={profileImage} alt="Picture of the author" layout="fill" priority />
			</div>
			<h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Yewon!"}</h2>
			<h3 className='text-xl font-semibold'>Frontend Engineer</h3>
			<p>꿈을 코딩하는 사람, 드림코더 예원</p>
			<Link href="/contact">
				<button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
			</Link>
		</section>
	)
}
