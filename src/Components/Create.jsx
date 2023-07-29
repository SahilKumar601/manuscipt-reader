import React from 'react'
import "../Styles/create.css"
import {ArrowUpTrayIcon} from "@heroicons/react/24/solid"
function Create() {
  return (
    <div className="create">
        <div className="create-desc">
            <h1 className='create-desc-header'> Description </h1>
            <p className='create-desc-body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nisi id pariatur quaerat, porro tempore aut asperiores? 
                Impedit molestias iure minus quos quas beatae magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore 
                expedita culpa aperiam velit nemo dolores explicabo, obcaecati aliquam earum, iure illo atque temporibus voluptatum cumque!
            </p>
        </div>
        <div className="create-form">
            <button>
                <span><ArrowUpTrayIcon width={20}/>upload</span>
            </button>
        </div>
        <div className="create-step">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, suscipit.</p>
        </div>
    </div>
  )
}

export default Create