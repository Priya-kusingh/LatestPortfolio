// import React from 'react'

const SingleContactSocial = ({Icon, Link}) => {
  return (
    <div className="flex border border-white text-3xltext-pink rounded-full justify-center p-3 items-center  hover:bg-black bg-darkPink">
      <a href="{Link}" className="cursor-pointer hover:text-pink ">
        <Icon />
      </a>
    </div>
  )
}

export default SingleContactSocial;
