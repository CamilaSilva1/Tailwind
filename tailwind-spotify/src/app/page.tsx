import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { MainTop } from './components/MainTop'
import { MainButton } from './components/MainButton'

export default function Home() {
	return (
		<div className="h-screen flex-col flex flex-1">
			<div className="flex flex-1">
				<Sidebar />

				<main className="flex-1 p-6">
					<div className='flex items-center gap-4'>
							<button className='rounded-full bg-black/40 p-1'>
								<ChevronLeft />
							</button>
							<button className='rounded-full bg-black/40 p-1'>
								<ChevronRight />
							</button>
					</div>

					<h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
	
					<MainTop />

					<h2 className='font-semibold text-2xl mt-10'>Made for Camila Silva</h2>

					<MainButton />
				</main>
			</div>

			<Footer />
		</div>
	)
}
