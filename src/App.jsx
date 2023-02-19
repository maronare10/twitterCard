import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const App = () => {
  // const format = (userName) => `@${userName}`
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="maronare">
        Mariana Navarro
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="leo">
        Leo Villazón
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="Samy">
        Samy Villazón
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="Mate">
        Mate Villazón
      </TwitterFollowCard>
    </section>
  )
}

export default App
