import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
    const linkS =[
        {
            id:1,
            child:(
               <>
                 <span className='ml-2'>Linkedin</span> <FaLinkedin size={25} />
               </>
            ),
            href:"https://www.linkedin.com/in/nahid-farazi-92909a214/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
               <>
                 <span className='ml-2'>Github</span> <FaGithub size={25} />
               </>
            ),
            href:"https://github.com/nahidfarazi",
            
        },
        {
            id:3,
            child:(
               <>
                 <span className='ml-2'>Mail</span> <HiOutlineMail size={25} />
               </>
            ),
            href:"mailto:nahidfarazi24@gmail.com",
           
        },
        {
            id:4,
            child:(
               <>
                 <span className='ml-2'>Resume</span> <BsFillPersonLinesFill size={25} />
               </>
            ),
            href:"../../public/resume.svg",
            style:"rounded-br-md",
            download:true,
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
        <ul>

            {linkS.map(({id,child,href,style,download}) => (
                

                <li key={id} className={"flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-6px] hover:rounded-md duration-300 bg-gray-500"  +  style}>
                
                <a href={href} className="flex justify-between items-center w-full
                text-white" 
                download={download}
                target="_"
                rel="noreferrer">

                    {child}
                </a>
            </li>

                
                ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks;