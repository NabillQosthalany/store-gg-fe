import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface GameItemProps {
  title: string
  category: string
  thumbnail: string
  id: string
}
export default function GameItem(props: GameItemProps) {
  const { title, category, thumbnail, id } = props
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${id}`}>
        <div className="blur-sharp">
          <Image className='thumbnail' src={`http://localhost:3000/api/v1/images/${thumbnail}.png`} width={205} height={270} alt="hello world" />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/console.svg" width={54} height={36} alt="console" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
