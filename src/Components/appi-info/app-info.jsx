import './app-info.css'

const AppInfo = ({allMoviesCount,favouriteMoveCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 tex-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-4 tex-uppercase'>Sevimli filmlar: {favouriteMoveCount}</p>
    </div>
  )
}

export default AppInfo