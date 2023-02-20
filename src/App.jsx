import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
 {
  userName: 'victorvzn',
  name: 'Victor Villasón Sosa',
  isFollowing: false,
 },
 {
  userName: 'Mariana73592901',
  name: 'Mariana Navarro Reyes',
  isFollowing: true,
 },
 {
  userName: 'cineplanet',
  name: 'Cine Planet',
  isFollowing: true,
 },
 {
  userName: 'midudev',
  name: 'Miguel Angel Durán',
  isFollowing: true,
 }
]

const App = () => {
  // const format = (userName) => `@${userName}`
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
