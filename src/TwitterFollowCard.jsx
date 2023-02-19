import React, { Children } from 'react'

const TwitterFollowCard = ({ children, userName, isFollowing }) => {
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
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard