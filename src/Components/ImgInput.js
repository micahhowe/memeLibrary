import React, {Component} from 'react'
let cageMemes = [
    {
        img:
          'https://cdn.wallpapersafari.com/55/32/pZUArx.jpg'
      },
      {
        img:
          "https://i.etsystatic.com/11942812/d/il/7506d3/1826896845/il_340x270.1826896845_rqq0.jpg?version=0"
      },
      {
        id: 3,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OI9U7vm_noQcTjCXhf8cgKmScXs24iROk_ncNhKG5-OPtRcixw"
      },
      {
        id: 4,
        img:
          "https://i.kym-cdn.com/photos/images/original/000/456/353/05a.jpg"
      },
      {
        id: 5,
        img:
          "https://americaswhiteboy.com/wp-content/uploads/2014/06/Nicolas-Cage-Mona-Lisa-face-funny-comedy-hilarious-weird-strange.jpg"
      },
      {
        id: 6,
        img:
          "https://wallpaperset.com/w/full/c/9/9/137695.jpg"
      },
      {
        id: 7,
        img:
          "https://www.dhresource.com/0x0s/f2-albu-g9-M00-B6-57-rBVaWFwfL8-AAGHRAAFzv4CFxVU135.jpg/fashion-funny-nicolas-cage-rage-newest-men.jpg"
      },
      {
        id: 8,
        img:
          "https://www.wonderfulterrible.com/wp-content/uploads/2018/10/Nicolas-Cage-portrait-cushion-cover.jpg"
      },
      {
        id: 9,
        img:
          "https://nctakecontrol.com/wp-content/uploads/2018/09/new-100-dollar-bill-unique-nicholas-cage-funny-money-hundred-dollar-bills-stickers-image-of-new-100-dollar-bill.jpg"
      },
      {
        id: 10,
        img:
          "https://i.pinimg.com/originals/bd/04/10/bd0410f39132799ebdf8ad4dbb765c5f.jpg"
      }
    ]


export default class ImgInput extends Component {
    constructor(props) {
    super(props)
        
    this.state = {
        imgValue: ' '
      }
    }
    addMeme() {
        const body = {
          img: this.state.imgValue,
        }
        this.props.addMemeBtn(body)
        //this.setState({ toggle: true })
      }
    
    handleChange(e) {
        if(e.target.value.length < 8 || e.target.value === '') {
            const rand1 = Math.ceil(Math.random() * 9)
            this.setState({imgValue: cageMemes[rand1].img})
            //this.setState({imgValue: 'https://cdn.wallpapersafari.com/55/32/pZUArx.jpg'})
        }else
        this.setState({ imgValue: e.target.value })
        //console.log(e.target.value) // I was using this to showcase the onchange 
    }
    render() {
        return (
            <div className="Insert-Image">
                <span>Insert Image URL: </span>
                <input onChange={e => this.handleChange(e)} type='text' placeholder='URL' />
                {/* I am going to want to push the imgValue to my memeArray on an object with an id */}
                <button onClick={() => this.addMeme()}>Add Meme</button>
                {/* The onClick needs to be an arrow function so it doesn't immediately run */}
            </div>
        )
    }

}