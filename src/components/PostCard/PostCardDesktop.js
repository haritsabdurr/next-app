export default function PostCardDesktop({ contentDesktop }) {
  return (
    <div className='max-w-screen-xl mx-auto px-8 py-12'>
      <div className='grid grid-cols-3 gap-3'>
        {contentDesktop?.map((posts) => (
          <div
            className='p-1 shadow-lg bg-gradient-to-r from-cyan-500 via-green-500 to-sky-300 rounded-2xl'
            key={posts.id}
          >
            <a className='block p-6 bg-white rounded-xl min-h-[360px]' href=''>
              <div className='mt-12'>
                <h5 className='text-xl font-bold text-gray-900'>
                  {posts.title}
                </h5>

                <p className='mt-2 text-sm text-gray-500 line-clamp-5'>
                  {posts.body}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
