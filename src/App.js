import logo from './logo.svg';
import './App.css';
import HoverComponent from './Components/HoverComponent';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    // ----------------1------------------
    var elem = document.querySelector(".fixed-img-1")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-1", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-1", { opacity: 0, })
    })
    // ----------------1------------------
    // ----------------2------------------
    var elem = document.querySelector(".fixed-img-2")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-2", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-2", { opacity: 0, })
    })
    // ----------------2------------------
    // ----------------3------------------
    var elem = document.querySelector(".fixed-img-3")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-3", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-3", { opacity: 0, })
    })
    // ----------------3------------------
    // ----------------4------------------
    var elem = document.querySelector(".fixed-img-4")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-4", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-4", { opacity: 0, })
    })
    // ----------------4------------------
    // ----------------5------------------
    var elem = document.querySelector(".fixed-img-5")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-5", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-5", { opacity: 0, })
    })
    // ----------------5------------------
    // ----------------6------------------
    var elem = document.querySelector(".fixed-img-6")
    elem.addEventListener("mousemove", function () {
      gsap.to(".fixed-div-6", { opacity: 1, })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(".fixed-div-6", { opacity: 0, })
    })
    // ----------------6------------------
  })
  useGSAP(() => {
    var tl = gsap.timeline()
    tl.to(".load1", {
      opacity: 1,
      duration: 0.3
    })
    tl.to(".load1", {
      opacity: 0,
      // duration:0.5
    })
    tl.to(".load2", {
      opacity: 1,
      duration: 0.3
    })
    tl.to(".load2", {
      opacity: 0,
      // duration:1
    })
    tl.to(".load3", {
      opacity: 1,
      duration: 0.3
    })
    tl.to(".load3", {
      opacity: 0,
      // duration:1
    })
    tl.to(".loader", {
      transform: "translateY(-100%)"
      // duration:1
    })
    // tl.to(".load2",{
    //     opacity:1,
    //     duration:1
    //   })
    // tl.to(".load3",{
    //     opacity:1,
    //     duration:1
    //   })



  })
  // ----------------------------old------------------------

  // });
  // x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
  return (
    <>
      <div className='-z-[10]'>
        <div className="wrapper overflow-hidden bg-[#EFEAE3]  z-[999]">
          <div className='h-[100%] loader w-[100%] fixed flex  justify-center items-center left-[0] top-[0] bg-[black] z-[9999999] '>
            <div className="load1 load text-[orangered] opacity-[0] text-[70px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[700]">Environment</div>
            <div className="load2 load text-[orangered] opacity-[0] text-[70px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[700]">Experiences</div>
            <div className="load3 load text-[orangered] opacity-[0] text-[70px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[700]">Content</div>
          </div>
          <div className="nav h-[100px] w-[100%] py-[70px] flex justify-between items-center px-[30px] -bg-[pink]">
            <img className='h-[75px]' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
            <span className='flex gap-[10px] nav-links'>
              <h3 className=' z-[3] nav-links-1 px-[20px] py-[10px] border relative border-[#d3adad] overflow-hidden rounded-[25px] text-[18px] cursor-pointer'>
                <div className=' z-[2] nav-links-layer-1 nav-links-layer min-h-[120px] min-w-[120px] ml-[6px] absolute left-[-20px] translate-y-[100%]  rounded-[50%] bg-[black]'></div>
                Work</h3>
              <h3 className=' z-[3] nav-links-2 px-[20px] py-[10px] border relative border-[#d3adad] overflow-hidden rounded-[25px] text-[18px] cursor-pointer'>
                <div className=' z-[2] nav-links-layer-2 nav-links-layer min-h-[120px] min-w-[120px] ml-[6px] absolute left-[-20px] translate-y-[100%]  rounded-[50%] bg-[black]'></div>
                Studio</h3>
              <h3 className=' z-[3] nav-links-3 px-[20px] py-[10px] border relative border-[#d3adad] overflow-hidden rounded-[25px] text-[18px] cursor-pointer'>
                <div className=' z-[2] nav-links-layer-3 nav-links-layer min-h-[120px] min-w-[120px] ml-[6px] absolute left-[-14px] translate-y-[100%]  rounded-[50%] bg-[black]'></div>
                Contact</h3>
            </span>
          </div>
          <div className="hero-section mt-[70px] px-[30px] h-[63vh] -bg-[red] flex">
            <div className="hero-left w-[50%] h-[100%] flex items-end">
              <p className='w-[430px] font-[700] text-[27px] hero-para leading-[30px]'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</p>
            </div>
            <div className="hero-right  w-[50%] h-[100%] leading-[130px] flex flex-col justify-end items-end">
            <div>
              <h1 className='text-[170px] hero-text font-[700]'>SPACES</h1>
              <h1 className='text-[170px] hero-text font-[700]'>THAT</h1>
              <h1 className='text-[170px] hero-text font-[700]'>INSPIRE</h1>
              </div>
            </div>
          </div>
          <div className="anime-section -h-[100vh] z-[-1] flex justify-end w-[100%] px-[30px]">
            <div className='w-[400px] z-[15] relative z-[18] '>
              <div className='ani-1 z-[-18] absolute left-[-100px] blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
              <div className='ani-2 z-[-18] absolute left-[-80px] blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
              <div className='ani-3 z-[-18] absolute left-[-30px] blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
              <div className='ani-4 z-[-18] absolute blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
            </div>
          </div>
          <div className="video-container flex justify-center -py-[600px] min-h-[600px] -bg-[red] z-[100] relative mt-[50px]  -w-[100%]">
            <div className=' w-[96%] -min-h-[100vh] -bg-[red] border-t border-t-[grey]'>
              <video className='mt-[80px] center-video rounded-[28px]' src="https://player.vimeo.com/progressive_redirect/playback/915350257/rendition/1080p/file.mp4?loc=external&signature=768f26c5396775e76c340cb808a897a724e78acb8231106dd94af9d732695176" muted loop autoPlay></video>
            </div>
          </div>
          <div className="slider flex gap-[10px] mt-[80px] ">
            <div className="marque flex items-center gap-[10px] z-[15]">
              <p className="slide text-[130px] font-[700]">CONTENT</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className="slide text-[130px] font-[700]">ENVIRNMENTS</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className='slide text-[130px] font-[700]'>EXPERIENCES</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
            </div>
            <div className="marque flex items-center gap-[10px] ">
              <p className="slide text-[130px] font-[700]">CONTENT</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className="slide text-[130px] font-[700]">ENVIRNMENTS</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className='slide text-[130px] font-[700]'>EXPERIENCES</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
            </div>
            <div className="marque flex items-center gap-[10px] ">
              <p className="slide text-[130px] font-[700]">CONTENT</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className="slide text-[130px] font-[700]">ENVIRNMENTS</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
              <p className='slide text-[130px] font-[700]'>EXPERIENCES</p>
              <div className='min-h-[50px] min-w-[50px] bg-[orangered] rounded-full'></div>
            </div>
          </div>
          <div className="second-anime-container py-[150px] -min-h-[100vh] flex w-[100%] px-[50px]">
            <div className='relative -pl-[100px] z-[10] pt-[300px]'>
              <div className='ani-5 ani-5-6 z-[18] absolute left-[50%] top-[0px] blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
              <div className='ani-6 ani-5-6 z-[18] absolute left-[50%] top-[0px] blur-[20px] h-[500px] w-[500px] bg-[orangered] rounded-[50%]'></div>
            </div>
            <div className="second-anime-container-left h-[100%]  w-[60%] -bg-[red] flex items-center">
              <div className="text-div leading-[70px] z-[12]">
                <h3 className='text-[55px] center-text font-[700] z-[12]'>We are a group of design-</h3>
                <h3 className='text-[55px] center-text font-[700] z-[12]'>driven, goal-focused creators,</h3>
                <h3 className='text-[55px] center-text font-[700] z-[12]'>producers, and designers</h3>
                <h3 className='text-[55px] center-text font-[700] z-[12]'>who believe that the details</h3>
                <h3 className='text-[55px] center-text font-[700] z-[12]'>make all the difference.</h3>
              </div>
            </div>
            <div className="second-anime-container-right h-[100%] w-[40%] -bg-[green] flex items-end pb-[120px] justify-end">
              <div className='w-[100%]'>
                <div className='h-[220px] w-[310px] -bg-[blue] second-anime-container-right-img '>
                  <img className='w-[100%] h-[100%] object-cover rounded-[10px]' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb.webp" alt="" />
                </div>
                <p className='second-anime-container-right-img  w-[310px] mt-[50px]'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
              </div>
            </div>
          </div>
          <div className=' w-[100%] -bg-[red] -px-[30px] relative'>
            <div className="fixed-div fixed-div-1 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[red]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/928415131/rendition/1080p/file.mp4?loc=external&signature=d9ca71058c660482d56381edb088fd94c5c6dc3dd2e03a7bdc1f431d2e25bd5c" muted loop autoPlay></video>
            </div>
            <div className="fixed-div fixed-div-2 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[blue]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/915351644/rendition/1080p/file.mp4?loc=external&signature=633b6a76ba79686a8014f09817443ad82e5ef348e4a81467eb9f8610c6410f50" muted loop autoPlay></video>
            </div>
            <div className="fixed-div fixed-div-3 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[orange]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/915352051/rendition/1080p/file.mp4?loc=external&signature=259968d8504f49abbda9f99a6b37b979af752097d338252bed55f788b60b4c98" muted loop autoPlay></video>
            </div>
            <div className="fixed-div fixed-div-4 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[green]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/928816922/rendition/1080p/file.mp4?loc=external&signature=d7911550abbaf7f6262fe43259314ac568a6e1be60cf0d3c7dc711030a81c8de" muted loop autoPlay></video>
            </div>
            <div className="fixed-div fixed-div-5 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[green]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/928793354/rendition/1080p/file.mp4?loc=external&signature=70f8634d25c34b3de7e26d9300daee81a85bd2271daf5eb907af88fbcf168217" muted loop autoPlay></video>
            </div>
            <div className="fixed-div fixed-div-6 opacity-[0] z-[10] h-[500px] rounded-[15px] fixed top-[10%] left-[50%] w-[420px] -bg-[green]">
              <video className='rounded-[15px] h-[100%] w-[100%] object-cover' src="https://player.vimeo.com/progressive_redirect/playback/915351830/rendition/1080p/file.mp4?loc=external&signature=e7d354029600a9d8a23b7bc16881789f86324b78b5f5f7d042e0f6085ff7f9f5" muted loop autoPlay></video>
            </div>
            <div>
              <div className='fixed-img-1'><HoverComponent title={"Capezio NYC Flagship"} brand={"CAPEZIO"} text={"Environment"} /></div>
              <div className='fixed-img-2'><HoverComponent title={"NYFW Popup"} brand={"AFTERPAY"} text={"Experiential"} /></div>
              <div className='fixed-img-3'><HoverComponent title={"Play New Kidvision"} brand={"NIKE"} text={"Environment"} /></div>
              <div className='fixed-img-4'><HoverComponent title={"Kelce Super Bowl Party"} brand={"WAVE SPORTS ENTERTAINMENT"} text={"Experiential"} /></div>
              <div className='fixed-img-5'><HoverComponent title={"Carmelo Anthony 7pm In Brooklyn Set"} brand={"WAVE SPORTS ENTERTAINMENT"} text={"Environment"} /></div>
              <div className='fixed-img-6'><HoverComponent title={"Converse SoHo"} brand={"CONVERSE"} text={"Environment"} /></div>
            </div>
          </div>
        </div>
        <div className='h-[100vh] bg-transparent'></div>
        <div className='h-[100vh] z-[-9999] footer-back w-[100%] bg-[#000] fixed -absolute bottom-[0] pt-[80px]'>
          <div className='relative w-[100%]'>
            <div className="ani-7 z-[2]  h-[400px] w-[1500px]  -rounded-[50%] blur-[40px] absolute top-[-80px] left-[-250px] bg-[red] rotate-[-20deg]"></div>
            <div className="ani-8 h-[400px] z-[2]  w-[1500px]  -rounded-[50%] blur-[40px] absolute top-[-150px] right-[-250px] bg-[red] rotate-[20deg] "></div>
            <div className="h-[250px] z-[2]  w-[100%]  -rounded-[50%] -blur-[20px] absolute top-[-100px] left-[0px] bg-[red] "></div>
            {/* <div className="ani-rotate z-[2] h-[500px] w-[800px] ml-[100px]  rounded-[40%] blur-[20px] absolute top-[-150px] right-[-100px] rotate-[10deg] bg-[red] "></div> */}
            {/* <div className="ani-rotate z-[2] h-[400px] w-[700px]  -rounded-[80%] blur-[20px] absolute top-[-150px] left-[-100px] bg-[red] "></div> */}
          </div>
          <div className="footer-nav px-[100px] flex justify-between">
            <span className='leading-[40px] z-[999]'>
              <h1 className='font-[700] text-[35px] footer-text text-[white]'>Work</h1>
              <h1 className='font-[700] text-[35px] footer-text text-[white]'>Studio</h1>
              <h1 className='font-[700] text-[35px] footer-text text-[white]'>Contact</h1>
            </span>
            <p className='font-[600] footer-para text-[22px] text-[white] w-[350px] z-[999]'>Get industry insights and creative inspiration straight to your inbox.</p>
          </div>
          <div className='justify-center flex footer-layer items-end h-[70vh]  '>
            <p className='font-[700] text-[18vw]  text-[white] '>Sundown</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
