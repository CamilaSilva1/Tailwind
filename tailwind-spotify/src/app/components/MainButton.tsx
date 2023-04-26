import Image from "next/image"

export function MainButton() {
    return (
        <div className="grid grid-cols-9 gap-4 mt-4">
						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/album.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/judas.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/kiss.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/inxs.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/yeah.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/pink.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/judas.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/album.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>

						<a href='#' className="flex flex-col gap-4 bg-white/5 p-3 rounded hover:bg-white/10">
							<Image className='w-full' src="/kiss.jpg" width={120} height={120} alt="capa do album da banda Vendal Moon" />
					        <strong className='font-semibold'>Daily Mix 1</strong>
							<span className='text-xs text-zinc-400'>Pink Floyd, The Doors, Heart and more</span>	
						</a>
					</div>
    )
}