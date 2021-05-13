import React from 'react'
import {render} from 'react-dom'

import "bootstrap"
import "./scss/custom.scss"

function App() {
	return  <div>
    <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
  </div>
}

render(<App />, document.getElementById('app'))
