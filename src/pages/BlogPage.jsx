import React from 'react';

function BlogPage() {
    const blogData = [
        {
          imageSrc: 'https://images.unsplash.com/photo-1719126222362-ab9f80d4c579?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Blog Post Title 1',
          description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
        },
        {
            imageSrc: 'https://plus.unsplash.com/premium_photo-1697730409550-71858318f4c8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Blog Post Title 1',
            description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
          },
    
          {
            imageSrc: 'https://images.unsplash.com/photo-1726303448966-0b692ebd8334?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Blog Post Title 1',
            description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
          },
          {
              imageSrc: 'https://images.unsplash.com/photo-1712992770394-0ae1523b0d37?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              title: 'Blog Post Title 1',
              description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
            },
    
    
    
            {
                imageSrc: 'https://images.unsplash.com/photo-1543138009-099c5d3b74ab?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Blog Post Title 1',
                description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
              },
              {
                  imageSrc: 'https://images.unsplash.com/photo-1701361753960-eac429eeabde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  title: 'Blog Post Title 1',
                  description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
                },
          
                {
                  imageSrc: 'https://images.unsplash.com/photo-1728769594106-d5d45d4534b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  title: 'Blog Post Title 1',
                  description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
                },
                {
                    imageSrc: 'https://images.unsplash.com/photo-1724431636789-a68b78fb148a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdhbmdhfGVufDB8fDB8fHww',
                    title: 'Blog Post Title 1',
                    description: 'This is a short description of the blog post. It can be truncated if it\'s too long.',
                  }
        // ... more blog data
      ];
    
  return (<>
    <div className="bg-[#F4F2E9] pt-10">

    <div className="bg-[#F4F2E9] py-3 md:py-5 md:mt-[5vw]">
      <div className="flex items-center justify-center text-sm font-bold text-gray-800">
        <span className="mx-3 hidden md:block">Prayagraj, Uttar Pradesh</span>
        <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 mr-6"></div>

        <div
          className="flex items-center text-[5.5vw] md:text-[3vw]"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          <h1 className="font-bold tracking-[0.25em] leading-none">MAHAK</h1>
          <img
            src="./img/logo.png"
            alt="Logo"
            className="w-[6.5vw] md:w-[3vw] h-[6.5vw] md:h-[3vw] inline-block relative -top-[0.2vw] ml-[-0.5vw] mr-[0.1vw]"
          />
          <h1 className="font-bold tracking-[0.25em] leading-none">MBH BLOG</h1>
        </div>

        <div className="h-12 w-[0.75vw] md:w-1 bg-black md:mx-4 ml-6"></div>
        <span className="mx-3 hidden md:block">www.mahakumbh.com</span>
      </div>

      <div className="h-[2px] md:h-[3px] bg-black md:mb-4"></div>
      <div
        className="text-xl text-center font-bold tracking-wider md:mb-4"
        style={{ fontFamily: 'Fraunces, serif' }}
      >
        PRAYAGRAJ MAHAKUMBH
      </div>
      <div className="h-[2px] md:h-[3px] bg-black"></div>
    </div>

      <div
        className="relative bg-cover bg-center w-[91%] h-[30vh] md:h-[45vh] mx-auto rounded-xl "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603868465911-94fe7e439661?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold mb-16 md:mb-16">MAHAKUMBH 2025</h1>
          <p className="text-sm md:text-xl lg:text-2xl">EXPERIENCE THE SPIRITUALITY OF LIFE TIME</p>
          <p className="text-sm md:text-xl lg:text-2xl">WITH PRAYAGRAJKUMBHMELA.COM</p>
        </div>
      </div>

      <div className="container mx-auto py-4 px-4 md:px-10 bg-[#F4F2E9]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 flex-wrap">
          {blogData.map((post, index) => (
            <div
              key={index}
              className="bg-[#F4F2E9] rounded-lg h-fit shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <img src={post.imageSrc} alt={post.title} className="w-full h-auto object-cover" />
              <div className="p-4 ">
                {/* <h2 className="font-bold text-xl mb-2">{post.title}</h2> */}
                <p className=" ">
                  {post.description}..
                  <a href="#" className="text-blue-500 hover:underline">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
}

export default BlogPage;