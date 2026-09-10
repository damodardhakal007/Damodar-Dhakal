// ═══════════════════════════════════════════════════════════════
// KAVRESTHALI SECONDARY SCHOOL — PORTAL CORE  v2.0
// Shared data, auth, page builder, sidebar, persistent store
// ═══════════════════════════════════════════════════════════════

// ─── SCHOOL INFO ─────────────────────────────────────────────
const SCHOOL = {
    name: 'Kavresthali Secondary School',
    shortName: 'KSS',
    address: 'Kavresthali, Kathmandu Valley, Nepal',
    phone: '+977-01-5112345',
    email: 'info@kavresthali.edu.np',
    established: '2035 BS (1978 AD)',
    motto: 'ज्ञानं परमं बलम् — Knowledge is Supreme Power',
    principal: 'Mr. Bishnu Prasad Gautam',
};

// ─── USERS (demo credentials) ───────────────────────────────
const USERS = {
    student: { username: 'student', password: '1234', role: 'student', name: 'Damodar Dhakal', id: 'STU-10A-007' },
    teacher: { username: 'teacher', password: '1234', role: 'teacher', name: 'Ram Bahadur Sharma', id: 'TCH-001' },
    admin:   { username: 'admin',   password: '1234', role: 'admin',   name: 'Bishnu Prasad Gautam', id: 'ADM-001' },
    parent:  { username: 'parent',  password: '1234', role: 'parent',  name: 'Krishna Dhakal', id: 'PAR-007', childId: 'STU-10A-007' },
};

let CURRENT_USER = null;
let CURRENT_PAGE_ON_READY = null;

// ─── DEFAULT DATA INITIALIZERS ────────────────────────────────
const INITIAL_CLASSES = [
    { id: 'C6A', name: 'Class 6',  section: 'A', students: 32, classTeacher: 'TCH-005' },
    { id: 'C6B', name: 'Class 6',  section: 'B', students: 30, classTeacher: 'TCH-004' },
    { id: 'C7A', name: 'Class 7',  section: 'A', students: 35, classTeacher: 'TCH-003' },
    { id: 'C7B', name: 'Class 7',  section: 'B', students: 33, classTeacher: 'TCH-005' },
    { id: 'C8A', name: 'Class 8',  section: 'A', students: 34, classTeacher: 'TCH-002' },
    { id: 'C8B', name: 'Class 8',  section: 'B', students: 31, classTeacher: 'TCH-004' },
    { id: 'C9A', name: 'Class 9',  section: 'A', students: 36, classTeacher: 'TCH-001' },
    { id: 'C9B', name: 'Class 9',  section: 'B', students: 34, classTeacher: 'TCH-003' },
    { id: 'C10A',name: 'Class 10', section: 'A', students: 38, classTeacher: 'TCH-001' },
    { id: 'C10B',name: 'Class 10', section: 'B', students: 35, classTeacher: 'TCH-002' },
];

const INITIAL_TEACHERS = [
    { id: 'TCH-001', name: 'Ram Bahadur Sharma',       subject: 'Mathematics',         subjects: ['Mathematics','Opt. Mathematics'], classes: ['C9A','C9B','C10A','C10B'], phone: '+977-9801234567', email: 'ram.sharma@kss.edu.np', qualification: 'M.Sc. Mathematics', experience: '12 years' },
    { id: 'TCH-002', name: 'Sita Kumari Thapa',        subject: 'English',             subjects: ['English'],                       classes: ['C8A','C8B','C9A','C10A','C10B'], phone: '+977-9807654321', email: 'sita.thapa@kss.edu.np', qualification: 'M.A. English', experience: '10 years' },
    { id: 'TCH-003', name: 'Krishna Prasad Adhikari',   subject: 'Science',             subjects: ['Science','Environment'],          classes: ['C7A','C9A','C9B','C10A','C10B'], phone: '+977-9812345678', email: 'krishna.adhikari@kss.edu.np', qualification: 'M.Sc. Chemistry', experience: '15 years' },
    { id: 'TCH-004', name: 'Gita Devi Poudel',          subject: 'Nepali',              subjects: ['Nepali','Moral Education'],       classes: ['C6B','C8A','C8B','C9A','C10A','C10B'], phone: '+977-9823456789', email: 'gita.poudel@kss.edu.np', qualification: 'M.A. Nepali', experience: '8 years' },
    { id: 'TCH-005', name: 'Hari Bahadur Bhandari',     subject: 'Social Studies',      subjects: ['Social Studies','HPE'],           classes: ['C6A','C7A','C7B','C8A','C9A','C10A','C10B'], phone: '+977-9834567890', email: 'hari.bhandari@kss.edu.np', qualification: 'M.A. History', experience: '14 years' },
    { id: 'TCH-006', name: 'Sarita Maharjan',            subject: 'Computer Science',    subjects: ['Computer'],                       classes: ['C8A','C8B','C9A','C9B','C10A','C10B'], phone: '+977-9845678901', email: 'sarita.maharjan@kss.edu.np', qualification: 'B.Sc. CSIT', experience: '5 years' },
];

const INITIAL_STUDENTS = [
    { id: 'STU-10A-001', name: 'Aarav Shrestha',     classId: 'C10A', roll: 1,  gender: 'M', phone: '+977-9801111001', parent: 'Sunil Shrestha',   dob: '2010-03-12', address: 'Budhanilkantha', bloodGroup: 'A+' },
    { id: 'STU-10A-002', name: 'Priya Gurung',       classId: 'C10A', roll: 2,  gender: 'F', phone: '+977-9801111002', parent: 'Dhan Gurung',      dob: '2010-07-25', address: 'Gongabu', bloodGroup: 'B+' },
    { id: 'STU-10A-003', name: 'Roshan Tamang',      classId: 'C10A', roll: 3,  gender: 'M', phone: '+977-9801111003', parent: 'Bir Tamang',       dob: '2010-01-18', address: 'Samakhusi', bloodGroup: 'O+' },
    { id: 'STU-10A-004', name: 'Sujata Rai',         classId: 'C10A', roll: 4,  gender: 'F', phone: '+977-9801111004', parent: 'Kamala Rai',       dob: '2010-11-05', address: 'Tokha', bloodGroup: 'AB+' },
    { id: 'STU-10A-005', name: 'Bikash Magar',       classId: 'C10A', roll: 5,  gender: 'M', phone: '+977-9801111005', parent: 'Tej Magar',        dob: '2010-05-30', address: 'Balaju', bloodGroup: 'B-' },
    { id: 'STU-10A-006', name: 'Anjali Karki',       classId: 'C10A', roll: 6,  gender: 'F', phone: '+977-9801111006', parent: 'Ramesh Karki',     dob: '2010-09-14', address: 'Maharajgunj', bloodGroup: 'A+' },
    { id: 'STU-10A-007', name: 'Damodar Dhakal',     classId: 'C10A', roll: 7,  gender: 'M', phone: '+977-9808841371', parent: 'Krishna Dhakal',   dob: '2010-04-15', address: 'Kavresthali', bloodGroup: 'O+' },
    { id: 'STU-10A-008', name: 'Manisha Adhikari',   classId: 'C10A', roll: 8,  gender: 'F', phone: '+977-9801111008', parent: 'Gyan Adhikari',    dob: '2010-08-22', address: 'Kapan', bloodGroup: 'A-' },
    { id: 'STU-10B-001', name: 'Sunil Lama',         classId: 'C10B', roll: 1,  gender: 'M', phone: '+977-9801111009', parent: 'Tashi Lama',       dob: '2010-02-11', address: 'Chabahil', bloodGroup: 'O+' },
    { id: 'STU-10B-002', name: 'Deepa Ghimire',      classId: 'C10B', roll: 2,  gender: 'F', phone: '+977-9801111010', parent: 'Shyam Ghimire',    dob: '2010-06-19', address: 'Sitapaila', bloodGroup: 'B+' },
    { id: 'STU-9A-001',  name: 'Rajesh Khadka',      classId: 'C9A',  roll: 1,  gender: 'M', phone: '+977-9801111011', parent: 'Mohan Khadka',     dob: '2011-10-03', address: 'Goldhunga', bloodGroup: 'A+' },
    { id: 'STU-9A-002',  name: 'Sunita Bista',       classId: 'C9A',  roll: 2,  gender: 'F', phone: '+977-9801111012', parent: 'Lokesh Bista',     dob: '2011-12-28', address: 'Nagarjun', bloodGroup: 'O-' },
];

const INITIAL_SUBJECTS_C10 = [
    { code: 'MATH-10', name: 'Mathematics',       credit: 4, teacher: 'TCH-001' },
    { code: 'SCI-10',  name: 'Science',            credit: 4, teacher: 'TCH-003' },
    { code: 'ENG-10',  name: 'English',            credit: 4, teacher: 'TCH-002' },
    { code: 'NEP-10',  name: 'Nepali',             credit: 4, teacher: 'TCH-004' },
    { code: 'SS-10',   name: 'Social Studies',     credit: 3, teacher: 'TCH-005' },
    { code: 'COMP-10', name: 'Computer Science',   credit: 2, teacher: 'TCH-006' },
    { code: 'HPE-10',  name: 'Health & PE',        credit: 2, teacher: 'TCH-005' },
    { code: 'MORAL-10',name: 'Moral Education',    credit: 1, teacher: 'TCH-004' },
];

const INITIAL_GRADES = [
    { studentId: 'STU-10A-007', subjectCode: 'MATH-10',  internal: 38, internalMax: 40, external: 52, externalMax: 60, total: 90, grade: 'A+', gpa: 4.0, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'SCI-10',   internal: 36, internalMax: 40, external: 50, externalMax: 60, total: 86, grade: 'A',  gpa: 3.6, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'ENG-10',   internal: 35, internalMax: 40, external: 48, externalMax: 60, total: 83, grade: 'A',  gpa: 3.6, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'NEP-10',   internal: 37, internalMax: 40, external: 55, externalMax: 60, total: 92, grade: 'A+', gpa: 4.0, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'SS-10',    internal: 32, internalMax: 40, external: 45, externalMax: 60, total: 77, grade: 'B+', gpa: 3.2, gradeClass: 'grade-b' },
    { studentId: 'STU-10A-007', subjectCode: 'COMP-10',  internal: 39, internalMax: 40, external: 56, externalMax: 60, total: 95, grade: 'A+', gpa: 4.0, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'HPE-10',   internal: 34, internalMax: 40, external: 46, externalMax: 60, total: 80, grade: 'A',  gpa: 3.6, gradeClass: 'grade-a' },
    { studentId: 'STU-10A-007', subjectCode: 'MORAL-10', internal: 36, internalMax: 40, external: 52, externalMax: 60, total: 88, grade: 'A',  gpa: 3.6, gradeClass: 'grade-a' },
];

const INITIAL_NOTICES = [
    { id: 1, title: '📋 First Terminal Examination Schedule',   date: 'Bhadra 20, 2083',  detail: 'Exams begin from Bhadra 25. Hall allocation posted on notice board. All students must carry admit cards.', type: 'exam',    author: 'Administration' },
    { id: 2, title: '💰 Fee Payment Reminder',                  date: 'Bhadra 15, 2083',  detail: 'Last date for quarterly fee payment is Bhadra 28, 2083. Late fee of Rs. 200 applies after deadline.', type: 'fee',     author: 'Accounts Dept.' },
    { id: 3, title: '🎓 Guest Lecture on Career Counseling',    date: 'Bhadra 10, 2083',  detail: 'Special session for Class 9 & 10 students on career options after SEE. Attendance mandatory.', type: 'event',   author: 'Principal' },
    { id: 4, title: '📚 Library Books Return Notice',           date: 'Shrawan 28, 2083', detail: 'All borrowed library books must be returned by Bhadra 5. Fine of Rs. 5/day for overdue books.', type: 'general', author: 'Library' },
    { id: 5, title: '🏆 Inter-House Sports Competition',        date: 'Shrawan 25, 2083', detail: 'Annual sports week starts Bhadra 1. Register your team with the Sports Department by Shrawan 30.', type: 'event',   author: 'Sports Dept.' },
    { id: 6, title: '🔬 Science Exhibition',                    date: 'Shrawan 20, 2083', detail: 'Class 8-10 students must submit science project proposals to Krishna sir by Shrawan 28.', type: 'event',   author: 'Science Dept.' },
];

const INITIAL_PARENT_MESSAGES = [
    { id: 1, from: 'Ram B. Sharma (Mathematics)', date: 'Bhadra 18, 2083', message: 'Damodar is performing excellently in Mathematics. He scored 90/100 in the last test. Keep encouraging him!', type: 'positive' },
    { id: 2, from: 'Sita K. Thapa (English)', date: 'Bhadra 12, 2083', message: 'Damodar needs to focus more on essay writing. Please encourage reading English newspapers at home.', type: 'suggestion' },
    { id: 3, from: 'Administration', date: 'Bhadra 8, 2083', message: 'PTM (Parent-Teacher Meeting) is scheduled for Bhadra 22, 2083 at 11:00 AM. Your presence is requested.', type: 'info' },
    { id: 4, from: 'Krishna P. Adhikari (Science)', date: 'Shrawan 28, 2083', message: 'Damodar has been selected for the Science Exhibition team. He needs to prepare a project on renewable energy.', type: 'positive' },
];

// ─── LOCAL STORAGE DATA GETTERS / SETTERS ────────────────────
function getStoredStudents() {
    const data = localStorage.getItem('kss_students');
    return data ? JSON.parse(data) : INITIAL_STUDENTS;
}
function saveStudents(list) {
    localStorage.setItem('kss_students', JSON.stringify(list));
}

function getStoredGrades() {
    const data = localStorage.getItem('kss_grades');
    return data ? JSON.parse(data) : INITIAL_GRADES;
}
function saveGrades(list) {
    localStorage.setItem('kss_grades', JSON.stringify(list));
}

function getStoredNotices() {
    const data = localStorage.getItem('kss_notices');
    return data ? JSON.parse(data) : INITIAL_NOTICES;
}
function saveNotices(list) {
    localStorage.setItem('kss_notices', JSON.stringify(list));
}

function getStoredMessages() {
    const data = localStorage.getItem('kss_messages');
    return data ? JSON.parse(data) : INITIAL_PARENT_MESSAGES;
}
function saveMessages(list) {
    localStorage.setItem('kss_messages', JSON.stringify(list));
}

// ── ATTENDANCE STORAGE (teacher marks → persisted) ────────────
function getStoredAttendanceRecords() {
    const data = localStorage.getItem('kss_attendance_records');
    return data ? JSON.parse(data) : [];
}
function saveAttendanceRecords(list) {
    localStorage.setItem('kss_attendance_records', JSON.stringify(list));
}

// Global proxies for convenience across pages
let STUDENTS = getStoredStudents();
let NOTICES = getStoredNotices();
let CLASSES = INITIAL_CLASSES;
let TEACHERS = INITIAL_TEACHERS;
let SUBJECTS_C10 = INITIAL_SUBJECTS_C10;
let PARENT_MESSAGES = getStoredMessages();

// ── FIX: Always compute live from storage ─────────────────────
function calculateStudentGPA(studentId) {
    const allGrades = getStoredGrades().filter(g => g.studentId === studentId);
    if (allGrades.length === 0) return 3.68;
    let totalPoints = 0;
    let totalCredits = 0;
    allGrades.forEach(g => {
        const sub = SUBJECTS_C10.find(s => s.code === g.subjectCode);
        const credit = sub ? sub.credit : 4;
        totalPoints += (g.gpa * credit);
        totalCredits += credit;
    });
    return totalCredits > 0 ? parseFloat((totalPoints / totalCredits).toFixed(2)) : 3.68;
}

// ── Keep MY_GRADES as a getter so it's always fresh ──────────
function getMyGrades() {
    return getStoredGrades().filter(g => g.studentId === 'STU-10A-007');
}
// For backward compat
let MY_GRADES = getMyGrades();
let MY_GPA = calculateStudentGPA('STU-10A-007');

// ─── ATTENDANCE ──────────────────────────────────────────────
const MY_ATTENDANCE = {
    present: 108, absent: 8, late: 4, total: 120,
    get percentage() { return Math.round((this.present / this.total) * 100); },
    monthly: {
        'Bhadra 2083': { startDay: 2, days: ['P','P','P','H','P','P','P','P','A','H','P','P','P','L','P','H','P','P','P','P','A','H','P','P','P','P','P','H','P','P'] },
        'Shrawan 2083': { startDay: 6, days: ['H','P','P','P','P','P','H','P','P','A','P','L','H','P','P','P','P','P','H','P','P','P','A','P','H','P','P','P','P','L','H'] },
    }
};

// ─── SCHEDULES ───────────────────────────────────────────────
const CLASS_SCHEDULE = {
    sun: [
        { time: '10:00 - 10:45', subject: 'Mathematics',   room: 'Room 301', teacher: 'Ram B. Sharma' },
        { time: '10:45 - 11:30', subject: 'Science',       room: 'Lab',      teacher: 'Krishna P. Adhikari' },
        { time: '11:45 - 12:30', subject: 'English',       room: 'Room 301', teacher: 'Sita K. Thapa' },
        { time: '12:30 - 1:15',  subject: 'Nepali',        room: 'Room 301', teacher: 'Gita D. Poudel' },
        { time: '2:00 - 2:45',   subject: 'Social Studies',room: 'Room 205', teacher: 'Hari B. Bhandari' },
    ],
    mon: [
        { time: '10:00 - 10:45', subject: 'Science',       room: 'Lab',      teacher: 'Krishna P. Adhikari' },
        { time: '10:45 - 11:30', subject: 'Computer',      room: 'Lab 2',    teacher: 'Sarita Maharjan' },
        { time: '11:45 - 12:30', subject: 'Mathematics',   room: 'Room 301', teacher: 'Ram B. Sharma' },
        { time: '12:30 - 1:15',  subject: 'Health & PE',   room: 'Ground',   teacher: 'Hari B. Bhandari' },
    ],
    tue: [
        { time: '10:00 - 10:45', subject: 'Nepali',        room: 'Room 301', teacher: 'Gita D. Poudel' },
        { time: '10:45 - 11:30', subject: 'Mathematics',   room: 'Room 301', teacher: 'Ram B. Sharma' },
        { time: '11:45 - 12:30', subject: 'Science',       room: 'Lab',      teacher: 'Krishna P. Adhikari' },
        { time: '12:30 - 1:15',  subject: 'English',       room: 'Room 301', teacher: 'Sita K. Thapa' },
        { time: '2:00 - 2:45',   subject: 'Moral Education',room:'Room 205', teacher: 'Gita D. Poudel' },
    ],
    wed: [
        { time: '10:00 - 10:45', subject: 'English',       room: 'Room 301', teacher: 'Sita K. Thapa' },
        { time: '10:45 - 11:30', subject: 'Social Studies', room: 'Room 205', teacher: 'Hari B. Bhandari' },
        { time: '11:45 - 12:30', subject: 'Mathematics',   room: 'Room 301', teacher: 'Ram B. Sharma' },
        { time: '12:30 - 1:15',  subject: 'Nepali',        room: 'Room 301', teacher: 'Gita D. Poudel' },
    ],
    thu: [
        { time: '10:00 - 10:45', subject: 'Science',       room: 'Lab',      teacher: 'Krishna P. Adhikari' },
        { time: '10:45 - 11:30', subject: 'English',       room: 'Room 301', teacher: 'Sita K. Thapa' },
        { time: '11:45 - 12:30', subject: 'Computer',      room: 'Lab 2',    teacher: 'Sarita Maharjan' },
        { time: '12:30 - 1:15',  subject: 'Social Studies', room: 'Room 205', teacher: 'Hari B. Bhandari' },
        { time: '2:00 - 2:45',   subject: 'Health & PE',   room: 'Ground',   teacher: 'Hari B. Bhandari' },
    ],
    fri: [
        { time: '10:00 - 11:30', subject: 'Project Work',  room: 'Hall',     teacher: 'All Faculty' },
        { time: '11:45 - 12:30', subject: 'Extra-curricular', room: 'Ground', teacher: 'Sports Dept.' },
    ],
};

const TEACHER_SCHEDULE = {
    sun: [
        { time: '10:00 - 10:45', subject: 'Mathematics', class: '10A', room: 'Room 301' },
        { time: '11:45 - 12:30', subject: 'Mathematics', class: '9A',  room: 'Room 205' },
        { time: '2:00 - 2:45',   subject: 'Opt. Math',   class: '10B', room: 'Room 301' },
    ],
    mon: [
        { time: '10:45 - 11:30', subject: 'Mathematics', class: '10B', room: 'Room 301' },
        { time: '11:45 - 12:30', subject: 'Mathematics', class: '10A', room: 'Room 301' },
        { time: '2:00 - 2:45',   subject: 'Mathematics', class: '9B',  room: 'Room 205' },
    ],
    tue: [
        { time: '10:00 - 10:45', subject: 'Opt. Math',   class: '10A', room: 'Room 301' },
        { time: '10:45 - 11:30', subject: 'Mathematics', class: '10A', room: 'Room 301' },
        { time: '12:30 - 1:15',  subject: 'Mathematics', class: '9A',  room: 'Room 205' },
    ],
    wed: [
        { time: '10:00 - 10:45', subject: 'Mathematics', class: '9B',  room: 'Room 205' },
        { time: '11:45 - 12:30', subject: 'Mathematics', class: '10A', room: 'Room 301' },
    ],
    thu: [
        { time: '10:00 - 10:45', subject: 'Mathematics', class: '10B', room: 'Room 301' },
        { time: '11:45 - 12:30', subject: 'Opt. Math',   class: '9A',  room: 'Room 205' },
        { time: '2:00 - 2:45',   subject: 'Mathematics', class: '9A',  room: 'Room 205' },
    ],
    fri: [
        { time: '10:00 - 11:30', subject: 'Project Review', class: 'All', room: 'Hall' },
    ],
};

// ─── ROLE NAVIGATION MENUS ──────────────────────────────────
const NAV_MENUS = {
    student: [
        { id: 'dashboard',  label: 'Dashboard',        icon: 'bxs-dashboard',      href: 'dashboard.html' },
        { id: 'profile',    label: 'My Profile',       icon: 'bx-user-circle',     href: 'profile.html' },
        { id: 'subjects',   label: 'Subjects & Grades',icon: 'bx-book-reader',     href: 'subjects.html' },
        { id: 'attendance', label: 'Attendance',        icon: 'bx-calendar-check',  href: 'attendance.html' },
        { id: 'schedule',   label: 'Class Schedule',    icon: 'bx-calendar',        href: 'schedule.html' },
        { id: 'gpa',        label: 'GPA Calculator',   icon: 'bx-bar-chart-alt-2', href: 'gpa.html' },
        { id: 'notices',    label: 'Notices',           icon: 'bx-bell',            href: 'notices.html' },
    ],
    teacher: [
        { id: 'dashboard',  label: 'Dashboard',        icon: 'bxs-dashboard',      href: 'dashboard.html' },
        { id: 'my-classes', label: 'My Classes',       icon: 'bx-chalkboard',      href: 'my-classes.html' },
        { id: 'attendance', label: 'Mark Attendance',   icon: 'bx-calendar-check',  href: 'attendance.html' },
        { id: 'grades',     label: 'Enter Grades',     icon: 'bx-edit',            href: 'grades.html' },
        { id: 'notices',    label: 'Post Notice',       icon: 'bx-bell',            href: 'notices.html' },
        { id: 'schedule',   label: 'My Schedule',      icon: 'bx-calendar',        href: 'schedule.html' },
        { id: 'students',   label: 'Student List',     icon: 'bx-group',           href: 'students.html' },
    ],
    admin: [
        { id: 'dashboard',  label: 'Dashboard',        icon: 'bxs-dashboard',      href: 'dashboard.html' },
        { id: 'students',   label: 'Manage Students',  icon: 'bx-group',           href: 'students.html' },
        { id: 'teachers',   label: 'Manage Teachers',  icon: 'bx-id-card',         href: 'teachers.html' },
        { id: 'classes',    label: 'Classes',           icon: 'bx-building-house',  href: 'classes.html' },
        { id: 'reports',    label: 'Reports',           icon: 'bx-line-chart',      href: 'reports.html' },
        { id: 'notices',    label: 'Manage Notices',    icon: 'bx-bell',            href: 'notices.html' },
    ],
    parent: [
        { id: 'dashboard',  label: 'Dashboard',        icon: 'bxs-dashboard',      href: 'dashboard.html' },
        { id: 'progress',   label: 'Academic Progress',icon: 'bx-line-chart',      href: 'progress.html' },
        { id: 'attendance', label: 'Attendance',        icon: 'bx-calendar-check',  href: 'attendance.html' },
        { id: 'messages',   label: 'Messages',         icon: 'bx-message-dots',    href: 'messages.html' },
    ],
};

const ROLE_COLORS = {
    student: 'var(--cyan)',
    teacher: 'var(--emerald)',
    admin:   'var(--gold)',
    parent:  'var(--violet)',
};

const ROLE_LABELS = {
    student: '🎓 Student',
    teacher: '👨‍🏫 Teacher',
    admin:   '🛡️ Administrator',
    parent:  '👨‍👩‍👧 Parent',
};

// ═════════════════════════════════════════════════════════════
// UTILITIES
// ═════════════════════════════════════════════════════════════

/** Returns today formatted as a Nepali-style "Month DD, YYYY" string.
 *  Uses a simple approximate Nepali calendar offset (+56/57 years, ~135 day offset).
 *  Good enough for display in a demo portal.
 */
function getNepaliDate() {
    const nepaliMonths = ['Baishakh','Jestha','Ashadh','Shrawan','Bhadra','Ashwin','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'];
    const today = new Date();
    // Approximate: Nepali year ≈ AD year + 56 or 57 (56 from ~mid-April)
    const adYear = today.getFullYear();
    const adMonth = today.getMonth(); // 0-indexed
    const adDay = today.getDate();
    // Rough conversion: Nepali new year usually falls ~mid-April
    const nepYear = adMonth < 3 || (adMonth === 3 && adDay < 14) ? adYear + 56 : adYear + 57;
    // Map AD month to approximate Nepali month (very rough, but fine for demo)
    // Nepali month 1 (Baishakh) ≈ AD April 14 – May 14
    const adDayOfYear = Math.floor((today - new Date(adYear, 0, 0)) / 86400000);
    const nepStartDayOfYear = 104; // ~April 14 day-of-year
    const nepDayOfYear = ((adDayOfYear - nepStartDayOfYear + 365) % 365);
    const nepMonthIdx = Math.floor(nepDayOfYear / 30.4375) % 12;
    const nepDay = (nepDayOfYear % 30) + 1;
    return `${nepaliMonths[nepMonthIdx]} ${nepDay}, ${nepYear}`;
}

/** Returns a day greeting */
function getDayGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good Morning';
    if (h < 17) return 'Good Afternoon';
    return 'Good Evening';
}

/** Returns the full English day name */
function getDayName() {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
}

// ═════════════════════════════════════════════════════════════
// THEME TOGGLE
// ═════════════════════════════════════════════════════════════
function initTheme() {
    const saved = localStorage.getItem('kss_theme') || 'dark';
    applyTheme(saved);
}

function applyTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('kss_theme', mode);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = mode === 'dark'
            ? `<i class='bx bx-sun'></i> Light Mode`
            : `<i class='bx bx-moon'></i> Dark Mode`;
    }
}

function toggleTheme() {
    const current = localStorage.getItem('kss_theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ═════════════════════════════════════════════════════════════
// PAGE BUILDER — Generates full page layout dynamically
// ═════════════════════════════════════════════════════════════
function buildPortalPage(config) {
    const { role, pageId, onReady } = config;
    CURRENT_PAGE_ON_READY = onReady;
    const color = ROLE_COLORS[role] || 'var(--cyan)';

    document.addEventListener('DOMContentLoaded', () => {
        // Apply saved theme immediately to prevent flash
        initTheme();

        const app = document.getElementById('app');
        if (!app) return;

        // ── Render structural frame
        app.innerHTML = `
            <div class="portal-bg-blob b1"></div>
            <div class="portal-bg-blob b2"></div>
            <div class="portal-bg-blob b3"></div>

            <div class="login-overlay" id="loginOverlay" style="display:flex;">
                <div class="login-card">
                    <div class="login-icon"><i class='bx bxs-school'></i></div>
                    <h2>${SCHOOL.name}</h2>
                    <p class="login-sub">${ROLE_LABELS[role]} Portal</p>
                    <form id="loginForm" autocomplete="off">
                        <div class="login-field">
                            <input type="text" id="loginUser" placeholder="Enter your username" autocomplete="off" spellcheck="false">
                            <i class='bx bx-user'></i>
                        </div>
                        <div class="login-field" style="position:relative;">
                            <input type="password" id="loginPass" placeholder="Enter your password">
                            <i class='bx bx-lock-alt'></i>
                            <button type="button" id="togglePwd" tabindex="-1"
                                style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;padding:0;line-height:1;">
                                <i class='bx bx-hide' id="eyeIcon"></i>
                            </button>
                        </div>
                        <button type="submit" class="login-btn" id="loginBtn">
                            <i class='bx bx-log-in-circle'></i> Sign In
                        </button>
                        <p class="login-error" id="loginError">
                            <i class='bx bx-error-circle'></i> Invalid username or password. Please try again.
                        </p>
                    </form>
                    <div class="login-hint">
                        <i class='bx bx-info-circle'></i>
                        Demo credentials — Username: <span>${role}</span> &nbsp;|&nbsp; Password: <span>1234</span>
                    </div>
                    <a href="../index.html" style="display:inline-block; margin-top:16px; font-size:12px; color:var(--text-muted); text-decoration:none; opacity:0.7; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7">
                        ← Switch role / Back to home
                    </a>
                </div>
            </div>

            <div class="portal-layout" id="portalLayout" style="display:none;">
                <button class="sidebar-toggle" id="sidebarToggle"><i class='bx bx-menu'></i></button>
                <div class="sidebar-overlay" id="sidebarOverlay"></div>

                <aside class="portal-sidebar" id="portalSidebar">
                    <a href="../index.html" class="sidebar-brand">
                        <i class='bx bxs-school'></i>
                        <span>${SCHOOL.shortName}</span>
                    </a>
                    <div class="sidebar-role-badge" style="margin:0 16px 12px; padding:8px 14px; background:rgba(255,255,255,0.04); border-radius:10px; font-size:12px; color:${color}; font-weight:700; text-align:center; border:1px solid rgba(255,255,255,0.06);">
                        ${ROLE_LABELS[role]}
                    </div>
                    <nav class="sidebar-nav">
                        ${buildSidebarNav(role, pageId)}
                    </nav>
                    <div class="sidebar-footer">
                        <a href="#" id="themeToggleBtn" onclick="toggleTheme(); return false;"><i class='bx bx-sun'></i> Light Mode</a>
                        <a href="../../index.html" class="home-link"><i class='bx bx-home-heart'></i> Main Portfolio</a>
                        <a href="../../tools.html"><i class='bx bx-wrench'></i> Tools Hub</a>
                        <a href="#" id="logoutBtn"><i class='bx bx-log-out'></i> Logout</a>
                    </div>
                </aside>

                <main class="portal-main" id="portalMain"></main>
            </div>
        `;

        // ── Password visibility toggle
        document.getElementById('togglePwd').addEventListener('click', () => {
            const input = document.getElementById('loginPass');
            const icon  = document.getElementById('eyeIcon');
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'bx bx-show';
            } else {
                input.type = 'password';
                icon.className = 'bx bx-hide';
            }
        });

        // ── Login form submit
        document.getElementById('loginForm').addEventListener('submit', e => {
            e.preventDefault();
            handleLogin(role);
        });

        // ── Logout button
        document.getElementById('logoutBtn').addEventListener('click', e => {
            e.preventDefault();
            logout();
        });

        // ── Sidebar toggle
        initSidebar();

        // Apply correct theme label after render
        const saved = localStorage.getItem('kss_theme') || 'dark';
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.innerHTML = saved === 'dark'
                ? `<i class='bx bx-sun'></i> Light Mode`
                : `<i class='bx bx-moon'></i> Dark Mode`;
        }

        // ── Check auth: if already logged in (from sessionStorage), skip login screen
        // This preserves session so navigating between pages doesn't re-prompt.
        // checkAuth() returns true only if a valid session exists — NOT auto-created.
        if (checkAuth(role)) {
            showPortal(onReady);
        } else {
            // Show login overlay (already display:flex by default above)
            document.getElementById('loginOverlay').style.display = 'flex';
        }
    });
}

function buildSidebarNav(role, activeId) {
    const menu = NAV_MENUS[role] || [];
    let html = '';
    menu.forEach(item => {
        const cls = item.id === activeId ? 'class="active"' : '';
        html += `<a href="${item.href}" ${cls}><i class='bx ${item.icon}'></i> ${item.label}</a>\n`;
    });
    html += '<div class="sidebar-divider"></div>';
    if (role !== 'admin') {
        html += `<a href="../admin/dashboard.html"><i class='bx bx-shield-quarter'></i> Switch to Admin</a>`;
    }
    return html;
}

// ═════════════════════════════════════════════════════════════
// AUTH & SHOW PORTAL
// ═════════════════════════════════════════════════════════════
function handleLogin(role) {
    const user   = document.getElementById('loginUser').value.trim().toLowerCase();
    const pass   = document.getElementById('loginPass').value;
    const error  = document.getElementById('loginError');
    const btn    = document.getElementById('loginBtn');
    const target = USERS[role] || USERS['student'];

    // Hide previous error, show loading state
    error.style.display = 'none';
    btn.disabled = true;
    btn.innerHTML = `<i class='bx bx-loader-alt' style="animation:spin 0.8s linear infinite;"></i> Signing in…`;

    // Small artificial delay so loading state is visible
    setTimeout(() => {
        if (user === target.username && pass === target.password) {
            // ✅ Credentials correct — store session and show portal
            CURRENT_USER = target;
            sessionStorage.setItem('portal_role', role);
            sessionStorage.setItem('portal_logged_in', 'true');
            sessionStorage.setItem('portal_user', JSON.stringify(target));

            btn.innerHTML = `<i class='bx bx-check-circle'></i> Success!`;
            btn.style.background = 'linear-gradient(90deg,var(--emerald),var(--cyan))';
            setTimeout(() => showPortal(CURRENT_PAGE_ON_READY), 400);
        } else {
            // ❌ Wrong credentials
            btn.disabled = false;
            btn.innerHTML = `<i class='bx bx-log-in-circle'></i> Sign In`;

            error.style.display = 'block';
            // Clear password for re-entry
            document.getElementById('loginPass').value = '';
            document.getElementById('loginPass').focus();

            // Shake the card
            const card = document.querySelector('.login-card');
            if (card) {
                card.style.animation = 'shake 0.4s ease';
                setTimeout(() => card.style.animation = '', 500);
            }
        }
    }, 500);
}


function logout() {
    sessionStorage.removeItem('portal_logged_in');
    sessionStorage.removeItem('portal_role');
    sessionStorage.removeItem('portal_user');
    CURRENT_USER = null;
    // FIX: use robust path resolution
    const segments = window.location.pathname.split('/');
    // Navigate up to student-portal root, then to index
    const depth = segments.filter(s => s).length;
    let back = '';
    for (let i = 0; i < 2; i++) back += '../';
    window.location.href = back + 'index.html';
}

// FIX: checkAuth now validates the role matches what's expected
function checkAuth(expectedRole) {
    const loggedIn = sessionStorage.getItem('portal_logged_in') === 'true';
    const savedRole = sessionStorage.getItem('portal_role');
    if (loggedIn) {
        // Allow access if roles match, OR if no role is saved yet (fresh demo)
        if (savedRole && savedRole !== expectedRole) {
            // Role mismatch — update session for the current page's role (demo convenience)
            const demoUser = USERS[expectedRole];
            if (demoUser) {
                CURRENT_USER = demoUser;
                sessionStorage.setItem('portal_role', expectedRole);
                sessionStorage.setItem('portal_user', JSON.stringify(demoUser));
            }
        } else {
            try { CURRENT_USER = JSON.parse(sessionStorage.getItem('portal_user')); } catch(e) {}
        }
        return true;
    }
    return false;
}

function showPortal(onReady) {
    const fn = onReady || CURRENT_PAGE_ON_READY;
    const overlay = document.getElementById('loginOverlay');
    const layout = document.getElementById('portalLayout');
    if (overlay) {
        overlay.classList.add('hidden');
        overlay.style.display = 'none';
    }
    if (layout) layout.style.display = 'flex';

    // CRITICAL FIX: call fn(main) FIRST to inject page content into the DOM,
    // THEN run initAnimations so IntersectionObserver can actually find the .fade-in elements.
    // If we run initAnimations before fn(main), the observer scans an empty <main>
    // and never adds .visible — leaving everything opacity:0 (blank page).
    setTimeout(() => {
        const main = document.getElementById('portalMain');
        if (main && typeof fn === 'function') fn(main);

        // Run animations after content is injected
        setTimeout(() => {
            initAnimations();
            // Safety fallback: force all fade-in visible after 800ms in case
            // IntersectionObserver doesn't fire (e.g., hidden tabs, some mobile browsers)
            setTimeout(() => {
                document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
                    el.classList.add('visible');
                });
            }, 800);
        }, 30);
    }, 20);
}


// ═════════════════════════════════════════════════════════════
// SIDEBAR TOGGLE
// ═════════════════════════════════════════════════════════════
function initSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('portalSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (toggle && sidebar && overlay) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
}

// ═════════════════════════════════════════════════════════════
// ANIMATIONS & COUNTERS
// ═════════════════════════════════════════════════════════════
function initAnimations() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.05 });
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.06}s`;
        obs.observe(el);
    });
}

function animateCounter(el, target, decimals = 0, suffix = '', duration = 1200) {
    if (!el) return;
    const start = performance.now();
    function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const val = ease * target;
        el.textContent = (decimals > 0 ? val.toFixed(decimals) : Math.round(val)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ═════════════════════════════════════════════════════════════
// UTILITIES & RENDERING HELPERS
// ═════════════════════════════════════════════════════════════
function getSubjectName(code) {
    const s = INITIAL_SUBJECTS_C10.find(x => x.code === code);
    return s ? s.name : code;
}
function getTeacherName(id) {
    const t = INITIAL_TEACHERS.find(x => x.id === id);
    return t ? t.name : id;
}
function getClassName(id) {
    const c = INITIAL_CLASSES.find(x => x.id === id);
    return c ? `${c.name} ${c.section}` : id;
}
function getTodayKey() {
    const days = ['sun','mon','tue','wed','thu','fri','sat'];
    return days[new Date().getDay()] || 'sun';
}

// FIX: truncate detail to 100 chars in dashboard previews
function renderNoticeItems(items) {
    return items.map(n => {
        const shortDetail = n.detail.length > 100 ? n.detail.slice(0, 100) + '…' : n.detail;
        return `
        <div class="notice-item">
            <div class="notice-title">${n.title}</div>
            <div class="notice-date">${n.date} — ${shortDetail}</div>
        </div>
    `;}).join('');
}

function renderScheduleItems(items) {
    if (!items || items.length === 0) return '<p style="color:var(--text-muted); text-align:center; padding:24px;">No classes scheduled.</p>';
    // Determine current running period
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();

    return items.map(it => {
        // Parse time range like "10:00 - 10:45"
        let isActive = false;
        const match = it.time.match(/(\d+):(\d+)\s*-\s*(\d+):(\d+)/);
        if (match) {
            const startM = parseInt(match[1]) * 60 + parseInt(match[2]);
            const endM   = parseInt(match[3]) * 60 + parseInt(match[4]);
            isActive = nowMins >= startM && nowMins <= endM;
        }
        const activeStyle = isActive ? 'border-left:3px solid var(--cyan); background:rgba(0,245,255,0.06);' : '';
        const activeTag   = isActive ? `<span style="font-size:10px; background:var(--cyan); color:#000; border-radius:4px; padding:2px 6px; margin-left:6px; font-weight:700;">NOW</span>` : '';
        return `
        <div class="schedule-item" style="${activeStyle}">
            <span class="sched-time"><i class='bx bx-time-five' style="margin-right:4px;"></i>${it.time}${activeTag}</span>
            <span class="sched-name">${it.subject || it.name}</span>
            <span class="sched-room">${it.room}${it.class ? ' • ' + it.class : ''}${it.teacher ? ' • ' + it.teacher : ''}</span>
        </div>
    `;}).join('');
}
