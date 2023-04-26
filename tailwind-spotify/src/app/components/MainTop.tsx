import { Pause, Play } from "lucide-react"
import Image from "next/image"

export function MainTop(){
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
						<a href='#' className="bg-white/5 h-24 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
							<Image src="/yeah.jpg" width={100} height={100} alt="capa do album da banda Vendal Moon" />
							<strong>Yeah Yeah Yeahs!</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

						<a href='#' className="bg-white/5 h-24 rounded flex items-center gap-4 overflow-hidden bg-white/10 ">
							<Image src="/album.jpg" width={100} height={100} alt="capa do album da banda Vendal Moon" />
							<strong>Vendal Moon</strong>
							<button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 visible'>
								<Pause />
							</button>
						</a>

						<a href='#' className="bg-white/5 h-24 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
							<Image src="/pink.jpg" width={100} height={1000} alt="capa do album da banda Vendal Moon" />
							<strong>Pink Floyd</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

						<a href='#' className="bg-white/5 h-24 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<Image src="/judas.jpg" width={100} height={1000} alt="capa do album da banda Vendal Moon" />
							<strong>Judas Priest</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

						<a href='#' className="bg-white/5 h-24 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<Image src="/inxs.jpg" width={100} height={1000} alt="capa do album da banda Vendal Moon" />
							<strong>INXS</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>

						<a href='#' className="bg-white/5 h-24 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
							<Image src="/cure.jpg" width={104} height={80} alt="capa do album da banda Vendal Moon" />
							<strong>The Cure</strong>
							<button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
								<Play />
							</button>
						</a>
				</div>
    )
}