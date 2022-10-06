export default function PostCardMobile({ contentMobile }) {
  return (
    <div className='container mx-auto py-12 px-4 space-y-4'>
      {contentMobile?.map((posts) => (
        <div
          className='p-1 shadow-md bg-gradient-to-r from-cyan-500 via-green-500 to-sky-300 rounded-2xl'
          key={posts.id}
        >
          <a className='block p-6 bg-white rounded-xl min-h-[252px]' href=''>
            <div className='my-4'>
              <h5 className='text-xl font-bold text-gray-900'>{posts.title}</h5>

              <p className='mt-2 text-sm text-gray-500 line-clamp-4'>
                {posts.body}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
