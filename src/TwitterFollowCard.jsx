import {useState} from 'react'

const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

  return (
    <article className='tw-followCard'> {/* <article style={{ display: 'flex', alignItems: 'center', color: '#fff' }}> ojo: Los estilos van como un objeto y con nomenclatura camelCase, pero de preferencia no colocar estilos aquí */}
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`} 
          alt="Un avatar" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard