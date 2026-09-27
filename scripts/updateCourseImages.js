const fs = require('fs');
const path = require('path');

const imageUpdates = {
  // popularCourses
  "advanced-graphic-design-with-freelancing": "/images/course thumbnail/graphic design.webp",
  "mastering-wordpress-development": "/images/course thumbnail/wordpress.webp",
  "android-application-development": "/images/course thumbnail/android application development.webp",
  "ux-ui-design": "/images/course thumbnail/ui ux design.webp",
  "digital-marketing-with-seo": "/images/course thumbnail/Digital Marketing.webp",
  "cpa-nexus-marketing": "/images/cpa-nexus-banner.jpg",
  "video-editing-with-motion-graphics": "/images/course thumbnail/video editing &motion graphics.webp",
  "app-development-with-flutter": "/images/course thumbnail/flutter app.webp",
  "python-with-django": "/images/course thumbnail/python django and machine learning.webp",
  "web-development": "/images/course thumbnail/web development.webp",
  "mern-stack-development": "/images/course thumbnail/diploma in full stack.webp",
  "comptia-a-plus-ccna-mtcna": "/images/course thumbnail/comptia-a-plus.webp",

  // techCourses
  "certified-web-design-and-development": "/images/course thumbnail/enterprise full stack next.js 15.webp",
  "certified-shopify-specialist": "/images/course thumbnail/certified shopify specialist.webp",
  "web-development-using-php-laravel": "/images/course thumbnail/php-laravel.webp",
  "ccna-routing-switching": "/images/course thumbnail/cisco certified network associate.webp",
  "ccnp-enterprise-networking": "/images/course thumbnail/cisco certified network professional.webp",
  "red-hat-linux-rhcsa": "/images/course thumbnail/red hat lynux.webp",
  "azure-cloud-solutions": "/images/course thumbnail/microsoft azure cloud.webp",
  "aws-cloud-architect": "/images/course thumbnail/amazon web services.webp",
  "swift-ios-app-development": "/images/course thumbnail/swift ios app development.webp",
  "asp-net-mvc-core": "/images/course thumbnail/asp.net mvc core.webp",
  "c-cpp-programming": "/images/course thumbnail/c-cpp programming.webp",
  "c-sharp-programming": "/images/course thumbnail/c-sharp programming.webp",
  "java-se-programming": "/images/course thumbnail/java se programming.webp",
  "programming-for-kids": "/images/course thumbnail/programming for kids.webp",

  // specialtyCourses
  "oracle-dba": "/images/course thumbnail/oracle dba.webp",
  "oracle-apex": "/images/course thumbnail/oracle apex.webp",
  "data-analysis-with-macro": "/images/course thumbnail/data analysis with macro.webp",
  "certified-ethical-hacking-ceh": "/images/course thumbnail/ethical hacking.webp",
  "cyber-security-specialist": "/images/course thumbnail/cyber security specialist.webp",
  "computer-hacking-forensic-investigator-chfi": "/images/course thumbnail/computer hacking forensic investigator.webp",
  "certified-information-systems-security-professional-cissp": "/images/course thumbnail/cissp.webp",
  "diploma-in-multimedia": "/images/course thumbnail/diploma in multimedia.webp",
  "diploma-in-web-technology": "/images/course thumbnail/diploma in web technology.webp",
  "diploma-in-networking": "/images/course thumbnail/diploma in networking.webp",
  "japanese-language": "/images/course thumbnail/japanese languase program.webp",
  "korean-language": "/images/course thumbnail/korean language program.webp",
  "german-language": "/images/course thumbnail/german language program.webp",
  "ielts-mastery": "/images/course thumbnail/ielts complete preparation.webp",
  "spoken-english": "/images/course thumbnail/spoken english.webp",
  "spoken-english-for-kids": "/images/course thumbnail/Speak English Fluently.webp",
  "caregiver-training-program": "/images/course thumbnail/caregiver training program.webp",

  // managementAndOthers
  "prince2-project-management": "/images/course thumbnail/prince project management.webp",
  "pmp-project-management-professional": "/images/course thumbnail/pmp project management professional.webp",
  "cisa-certified-information-systems-auditor": "/images/course thumbnail/cisa.webp",
  "itil-service-management": "/images/course thumbnail/itil 4 foundation service management.webp",
  "microsoft-project": "/images/course thumbnail/product managment.webp",
  "microsoft-office-specialist": "/images/course thumbnail/microsoft office specialist.webp",
  "big-data-engineering": "/images/course thumbnail/diploma in ai and data science.webp",
  "spss-data-analysis": "/images/course thumbnail/spss statistical data analysis.webp",
  "machine-learning-ai": "/images/course thumbnail/Generative ai and prompt eng.webp",
  "advanced-excel-mastery": "/images/course thumbnail/advance excel for business analytics.webp",
  "amazon-kdp-publishing": "/images/course thumbnail/amazon kdp.webp",
  "sap-enterprise-fico-abap-sd-mm": "/images/course thumbnail/sap enterprise fico abap sd mm.webp"
};

const coursesDir = path.join(__dirname, '..', 'src', 'data', 'courses');
const files = ['popularCourses.js', 'techCourses.js', 'specialtyCourses.js', 'managementAndOthers.js'];

files.forEach(file => {
  const filePath = path.join(coursesDir, file);
  const courses = require(filePath);
  
  courses.forEach(course => {
    if (imageUpdates[course.slug]) {
      course.image = imageUpdates[course.slug];
    }
  });

  const content = 'module.exports = ' + JSON.stringify(courses, null, 2) + ';\n';
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file}`);
});
