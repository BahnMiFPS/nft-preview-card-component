import "./App.css"
import equi from "./images/image-equilibrium.jpg"
import eth from "./images/icon-ethereum.svg"
import clock from "./images/icon-clock.svg"
import avatar from "./images/image-avatar.png"
import view from "./images/icon-view.svg"

function App() {
	return (
		<div className="Card">
			<div className="banner">
				<img src={equi} alt="" className="equi" />
				<div>
					<img src={view} className="view" />
				</div>
			</div>
			<a className="title" href="#">
				Equilibrium #3429
			</a>
			<p className="description">
				Our Equilibrium collection promotes balance and calm.
			</p>
			<div className="group-4">
				<div className="left">
					<img src={eth} height="18px" />
					<p className="caption">0.041 ETH</p>
				</div>
				<div className="right">
					<img src={clock} height="16px" />
					<p className="time-left">3 days left</p>
				</div>
			</div>
			<div className="line"></div>
			<div className="author">
				<img src={avatar} alt="" className="avatar" />
				<span>
					Creation of{" "}
					<a className="author-link" href="#">
						Jules Wyvern
					</a>
				</span>
			</div>
		</div>
	)
}

export default App
