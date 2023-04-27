import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">The  Daily</span>
            <span className="headerTitleLg">Scribe</span>
        </div>
        <img className="headerImg" 
            src="https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80" 
            alt="">
        </img>
    </div>
  )
}
