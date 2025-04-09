
interface Course {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
}

const AcademyPage: React.FC = () => {
  // Featured courses data
  const featuredCourses: Course[] = [
    {
      id: '1',
      title: 'Building a modern web app from scratch',
      difficulty: 'Advanced',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/e4031a20-72f2-42dd-b6f9-00d4b50562da.png'
    },
    {
      id: '2',
      title: 'Docker and Kubernetes in production',
      difficulty: 'Intermediate',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/b55b4b4d-2576-462f-9395-01d6edb417ec.png'
    },
    {
      id: '3',
      title: 'Product management essentials',
      difficulty: 'Beginner',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/190c2f5f-4cc0-475f-9a4a-37316c44ff23.png'
    },
    {
      id: '4',
      title: 'End-to-end machine learning with TensorFlow',
      difficulty: 'Advanced',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/6a1a3adb-4a9f-48da-a813-45a023a6e221.png'
    },
    {
      id: '5',
      title: 'Real-time data processing with Apache Kafka',
      difficulty: 'Intermediate',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/a0c67623-4084-49fe-a263-aea7b84ca257.png'
    }
  ];

  // All courses data
  const allCourses: Course[] = [
    {
      id: '6',
      title: 'React Native for beginners',
      difficulty: 'Beginner',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/3ad09dbc-ad57-459f-afaa-29fa1e8192a8.png'
    },
    {
      id: '7',
      title: 'Microservices with Node.js and Docker',
      difficulty: 'Intermediate',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/84300ac8-c6af-4aa0-8978-0aa41319b91f.png'
    },
    {
      id: '8',
      title: 'UI/UX design fundamentals',
      difficulty: 'Beginner',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/5e92531c-68d2-4696-866a-151e3c9bb5d4.png'
    },
    {
      id: '9',
      title: 'Python for data analysis',
      difficulty: 'Intermediate',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/5815d64d-e53e-49ba-93ac-13bfe1ef4e63.png'
    },
    {
      id: '10',
      title: 'Deep learning with PyTorch',
      difficulty: 'Advanced',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c5e0a212-6f3b-4f48-a95c-090dfa79f006.png'
    }
  ];

  // Category filters
  const mainCategories = [
    'All courses', 'Software development', 'DevOps', 'Product design', 
    'Data science', 'Machine learning', 'Cybersecurity'
  ];

  const subCategories = [
    'Featured', 'Beginner', 'Intermediate', 'Advanced', 
    'Short courses', 'Full courses', 'Free courses', 'Paid courses',
    'Technology basics', 'Career development'
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-10 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900">Academy</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {['Courses', 'Paths', 'Resource', 'Events', 'Community'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <button className="px-4 py-2 rounded-xl bg-gray-50 text-sm font-bold text-gray-900 hover:bg-gray-100 transition-colors">
                For Business
              </button>
              <button className="p-2 rounded-xl bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
              </button>
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7258a2c1-13b2-4bd1-a0fc-72c11178558e.png")' }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-gray-900 mb-3">Explore courses</h1>
            <p className="text-lg text-gray-500">Browse our full course library by category, difficulty, or duration</p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {mainCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded-xl text-sm font-medium ${
                  category === 'All courses' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* All Courses */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All courses</h2>
          </div>
          
          {/* Subcategory Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {subCategories.map((category) => (
              <button
                key={category}
                className="px-4 py-1 rounded-xl bg-gray-100 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Course Card Component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="group cursor-pointer">
      <div 
        className="w-full aspect-video rounded-xl bg-cover bg-center mb-3 transition-transform group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${course.imageUrl})` }}
      />
      <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
      <p className={`text-sm ${
        course.difficulty === 'Beginner' ? 'text-green-600' :
        course.difficulty === 'Intermediate' ? 'text-yellow-600' :
        'text-red-600'
      }`}>
        {course.difficulty}
      </p>
    </div>
  );
};

export default AcademyPage;