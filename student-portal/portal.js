// ═══════════════════════════════════════════════════════════════
// KAVRESTHALI SECONDARY SCHOOL — PORTAL CORE
// Shared data, auth, page builder, sidebar, utilities
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

// ─── CLASSES ─────────────────────────────────────────────────
const CLASSES = [
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

// ─── TEACHERS ────────────────────────────────────────────────
const TEACHERS = [
    { id: 'TCH-001', name: 'Ram Bahadur Sharma',       subject: 'Mathematics',         subjects: ['Mathematics','Opt. Mathematics'], classes: ['C9A','C9B','C10A','C10B'], phone: '+977-9801234567', email: 'ram.sharma@kss.edu.np', qualification: 'M.Sc. Mathematics', experience: '12 years' },
    { id: 'TCH-002', name: 'Sita Kumari Thapa',        subject: 'English',             subjects: ['English'],                       classes: ['C8A','C8B','C9A','C10A','C10B'], phone: '+977-9807654321', email: 'sita.thapa@kss.edu.np', qualification: 'M.A. English', experience: '10 years' },
    { id: 'TCH-003', name: 'Krishna Prasad Adhikari',   subject: 'Science',             subjects: ['Science','Environment'],          classes: ['C7A','C9A','C9B','C10A','C10B'], phone: '+977-9812345678', email: 'krishna.adhikari@kss.edu.np', qualification: 'M.Sc. Chemistry', experience: '15 years' },
    { id: 'TCH-004', name: 'Gita Devi Poudel',          subject: 'Nepali',              subjects: ['Nepali','Moral Education'],       classes: ['C6B','C8A','C8B','C9A','C10A','C10B'], phone: '+977-9823456789', email: 'gita.poudel@kss.edu.np', qualification: 'M.A. Nepali', experience: '8 years' },
    { id: 'TCH-005', name: 'Hari Bahadur Bhandari',     subject: 'Social Studies',      subjects: ['Social Studies','HPE'],           classes: ['C6A','C7A','C7B','C8A','C9A','C10A','C10B'], phone: '+977-9834567890', email: 'hari.bhandari@kss.edu.np', qualification: 'M.A. History', experience: '14 years' },
    { id: 'TCH-006', name: 'Sarita Maharjan',            subject: 'Computer Science',    subjects: ['Computer'],                       classes: ['C8A','C8B','C9A','C9B','C10A','C10B'], phone: '+977-9845678901', email: 'sarita.maharjan@kss.edu.np', qualification: 'B.Sc. CSIT', experience: '5 years' },
];

// ─── STUDENTS ────────────────────────────────────────────────
const STUDENTS = [
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

// ─── SUBJECTS for Class 10 ───────────────────────────────────
const SUBJECTS_C10 = [
    { code: 'MATH-10', name: 'Mathematics',       credit: 4, teacher: 'TCH-001' },
    { code: 'SCI-10',  name: 'Science',            credit: 4, teacher: 'TCH-003' },
    { code: 'ENG-10',  name: 'English',            credit: 4, teacher: 'TCH-002' },
    { code: 'NEP-10',  name: 'Nepali',             credit: 4, teacher: 'TCH-004' },
    { code: 'SS-10',   name: 'Social Studies',     credit: 3, teacher: 'TCH-005' },
    { code: 'COMP-10', name: 'Computer Science',   credit: 2, teacher: 'TCH-006' },
    { code: 'HPE-10',  name: 'Health & PE',        credit: 2, teacher: 'TCH-005' },
    { code: 'MORAL-10',name: 'Moral Education',    credit: 1, teacher: 'TCH-004' },
];

// ─── GRADES for Damodar (STU-10A-007) ────────────────────────
const MY_GRADES = [
    { subjectCode: 'MATH-10',  internal: 38, internalMax: 40, external: 52, externalMax: 60, total: 90, grade: 'A+', gpa: 3.9, gradeClass: 'grade-a' },
    { subjectCode: 'SCI-10',   internal: 36, internalMax: 40, external: 50, externalMax: 60, total: 86, grade: 'A',  gpa: 3.7, gradeClass: 'grade-a' },
    { subjectCode: 'ENG-10',   internal: 35, internalMax: 40, external: 48, externalMax: 60, total: 83, grade: 'B+', gpa: 3.3, gradeClass: 'grade-b' },
    { subjectCode: 'NEP-10',   internal: 37, internalMax: 40, external: 55, externalMax: 60, total: 92, grade: 'A+', gpa: 4.0, gradeClass: 'grade-a' },
    { subjectCode: 'SS-10',    internal: 32, internalMax: 40, external: 45, externalMax: 60, total: 77, grade: 'B+', gpa: 3.3, gradeClass: 'grade-b' },
    { subjectCode: 'COMP-10',  internal: 39, internalMax: 40, external: 56, externalMax: 60, total: 95, grade: 'A+', gpa: 4.0, gradeClass: 'grade-a' },
    { subjectCode: 'HPE-10',   internal: 34, internalMax: 40, external: 46, externalMax: 60, total: 80, grade: 'A-', gpa: 3.5, gradeClass: 'grade-a' },
    { subjectCode: 'MORAL-10', internal: 36, internalMax: 40, external: 52, externalMax: 60, total: 88, grade: 'A',  gpa: 3.7, gradeClass: 'grade-a' },
];

const MY_GPA = 3.68;

// ─── ATTENDANCE ──────────────────────────────────────────────
const MY_ATTENDANCE = {
    present: 108, absent: 8, late: 4, total: 120,
    get percentage() { return Math.round((this.present / this.total) * 100); },
    monthly: {
        'Bhadra 2083': { startDay: 2, days: ['P','P','P','H','P','P','P','P','A','H','P','P','P','L','P','H','P','P','P','P','A','H','P','P','P','P','P','H','P','P'] },
        'Shrawan 2083': { startDay: 6, days: ['H','P','P','P','P','P','H','P','P','A','P','L','H','P','P','P','P','P','H','P','P','P','A','P','H','P','P','P','P','L','H'] },
    }
};

// All students' attendance summary for teacher/admin
const ALL_ATTENDANCE = STUDENTS.map(s => ({
    studentId: s.id, present: 100 + Math.floor(Math.random() * 15), absent: 3 + Math.floor(Math.random() * 10), late: Math.floor(Math.random() * 6), total: 120,
    get percentage() { return Math.round((this.present / this.total) * 100); }
}));

// ─── SCHEDULE ────────────────────────────────────────────────
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

// Teacher schedule for Ram B. Sharma
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

// ─── NOTICES ─────────────────────────────────────────────────
const NOTICES = [
    { id: 1, title: '📋 First Terminal Examination Schedule',   date: 'Bhadra 20, 2083',  detail: 'Exams begin from Bhadra 25. Hall allocation posted on notice board. All students must carry admit cards.', type: 'exam',    author: 'Administration' },
    { id: 2, title: '💰 Fee Payment Reminder',                  date: 'Bhadra 15, 2083',  detail: 'Last date for quarterly fee payment is Bhadra 28, 2083. Late fee of Rs. 200 applies after deadline.', type: 'fee',     author: 'Accounts Dept.' },
    { id: 3, title: '🎓 Guest Lecture on Career Counseling',    date: 'Bhadra 10, 2083',  detail: 'Special session for Class 9 & 10 students on career options after SEE. Attendance mandatory.', type: 'event',   author: 'Principal' },
    { id: 4, title: '📚 Library Books Return Notice',           date: 'Shrawan 28, 2083', detail: 'All borrowed library books must be returned by Bhadra 5. Fine of Rs. 5/day for overdue books.', type: 'general', author: 'Library' },
    { id: 5, title: '🏆 Inter-House Sports Competition',        date: 'Shrawan 25, 2083', detail: 'Annual sports week starts Bhadra 1. Register your team with the Sports Department by Shrawan 30.', type: 'event',   author: 'Sports Dept.' },
    { id: 6, title: '🔬 Science Exhibition',                    date: 'Shrawan 20, 2083', detail: 'Class 8-10 students must submit science project proposals to Krishna sir by Shrawan 28.', type: 'event',   author: 'Science Dept.' },
];

// ─── PARENT MESSAGES ─────────────────────────────────────────
const PARENT_MESSAGES = [
    { from: 'Ram B. Sharma (Mathematics)', date: 'Bhadra 18, 2083', message: 'Damodar is performing excellently in Mathematics. He scored 90/100 in the last test. Keep encouraging him!', type: 'positive' },
    { from: 'Sita K. Thapa (English)', date: 'Bhadra 12, 2083', message: 'Damodar needs to focus more on essay writing. Please encourage reading English newspapers at home.', type: 'suggestion' },
    { from: 'Administration', date: 'Bhadra 8, 2083', message: 'PTM (Parent-Teacher Meeting) is scheduled for Bhadra 22, 2083 at 11:00 AM. Your presence is requested.', type: 'info' },
    { from: 'Krishna P. Adhikari (Science)', date: 'Shrawan 28, 2083', message: 'Damodar has been selected for the Science Exhibition team. He needs to prepare a project on renewable energy.', type: 'positive' },
];

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
// PAGE BUILDER — Generates full page layout dynamically
// ═════════════════════════════════════════════════════════════
function buildPortalPage(config) {
    // config: { role, pageId, onReady }
    const { role, pageId, onReady } = config;
    const color = ROLE_COLORS[role] || 'var(--cyan)';

    document.addEventListener('DOMContentLoaded', () => {
        const app = document.getElementById('app');
        if (!app) return;

        // ── Background blobs
        app.innerHTML = `
            <div class="portal-bg-blob b1"></div>
            <div class="portal-bg-blob b2"></div>
            <div class="portal-bg-blob b3"></div>

            <div class="login-overlay" id="loginOverlay">
                <div class="login-card">
                    <div class="login-icon"><i class='bx bxs-school'></i></div>
                    <h2>${SCHOOL.name}</h2>
                    <p class="login-sub">${ROLE_LABELS[role]} Portal — Enter credentials</p>
                    <form id="loginForm">
                        <div class="login-field">
                            <input type="text" id="loginUser" placeholder="Username" autocomplete="off">
                            <i class='bx bx-user'></i>
                        </div>
                        <div class="login-field">
                            <input type="password" id="loginPass" placeholder="Password">
                            <i class='bx bx-lock-alt'></i>
                        </div>
                        <button type="submit" class="login-btn">Sign In</button>
                        <p class="login-error" id="loginError">Invalid credentials. Please try again.</p>
                    </form>
                    <p class="login-hint">Demo — Username: <span>${role}</span> | Password: <span>1234</span></p>
                    <a href="../index.html" style="display:inline-block; margin-top:14px; font-size:12px; color:var(--text-muted); text-decoration:none;">← Back to role selection</a>
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
                        <a href="../../index.html" class="home-link"><i class='bx bx-home-heart'></i> Main Portfolio</a>
                        <a href="../../tools.html"><i class='bx bx-wrench'></i> Tools Hub</a>
                        <a href="#" id="logoutBtn"><i class='bx bx-log-out'></i> Logout</a>
                    </div>
                </aside>

                <main class="portal-main" id="portalMain"></main>
            </div>
        `;

        // ── Auth events
        document.getElementById('loginForm').addEventListener('submit', e => {
            e.preventDefault();
            handleLogin(role);
        });
        document.getElementById('logoutBtn').addEventListener('click', e => {
            e.preventDefault();
            logout();
        });

        // ── Sidebar toggle
        initSidebar();

        // ── Check auth
        if (checkAuth(role)) {
            showPortal(onReady);
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
        html += `<a href="../admin/dashboard.html"><i class='bx bx-shield-quarter'></i> Admin</a>`;
    }
    return html;
}

// ═════════════════════════════════════════════════════════════
// AUTH
// ═════════════════════════════════════════════════════════════
function handleLogin(role) {
    const user = document.getElementById('loginUser').value.trim().toLowerCase();
    const pass = document.getElementById('loginPass').value;
    const error = document.getElementById('loginError');
    const target = USERS[role];

    if (target && user === target.username && pass === target.password) {
        CURRENT_USER = target;
        sessionStorage.setItem('portal_role', role);
        sessionStorage.setItem('portal_logged_in', 'true');
        sessionStorage.setItem('portal_user', JSON.stringify(target));
        showPortal();
    } else {
        error.style.display = 'block';
        error.style.animation = 'shake 0.4s ease';
        setTimeout(() => error.style.animation = '', 400);
    }
}

function logout() {
    sessionStorage.removeItem('portal_logged_in');
    sessionStorage.removeItem('portal_role');
    sessionStorage.removeItem('portal_user');
    CURRENT_USER = null;
    window.location.href = '../index.html';
}

function checkAuth(role) {
    const loggedIn = sessionStorage.getItem('portal_logged_in') === 'true';
    const savedRole = sessionStorage.getItem('portal_role');
    if (loggedIn && savedRole === role) {
        try { CURRENT_USER = JSON.parse(sessionStorage.getItem('portal_user')); } catch(e) {}
        return true;
    }
    return false;
}

function showPortal(onReady) {
    const overlay = document.getElementById('loginOverlay');
    const layout = document.getElementById('portalLayout');
    if (overlay) overlay.classList.add('hidden');
    if (layout) layout.style.display = 'flex';
    setTimeout(() => {
        initAnimations();
        if (typeof onReady === 'function') onReady(document.getElementById('portalMain'));
    }, 100);
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
// ANIMATIONS
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
// UTILITIES
// ═════════════════════════════════════════════════════════════
function getSubjectName(code) {
    const s = SUBJECTS_C10.find(x => x.code === code);
    return s ? s.name : code;
}
function getTeacherName(id) {
    const t = TEACHERS.find(x => x.id === id);
    return t ? t.name : id;
}
function getClassName(id) {
    const c = CLASSES.find(x => x.id === id);
    return c ? `${c.name} ${c.section}` : id;
}
function getTodayKey() {
    const days = ['sun','mon','tue','wed','thu','fri','sat'];
    return days[new Date().getDay()] || 'sun';
}
function renderScheduleItems(items) {
    if (!items || items.length === 0) return '<p style="color:var(--text-muted); text-align:center; padding:24px;">No classes scheduled.</p>';
    return items.map(it => `
        <div class="schedule-item">
            <span class="sched-time"><i class='bx bx-time-five' style="margin-right:4px;"></i>${it.time}</span>
            <span class="sched-name">${it.subject || it.name}</span>
            <span class="sched-room">${it.room}${it.class ? ' • ' + it.class : ''}${it.teacher ? ' • ' + it.teacher : ''}</span>
        </div>
    `).join('');
}
function renderNoticeItems(items) {
    return items.map(n => `
        <div class="notice-item">
            <div class="notice-title">${n.title}</div>
            <div class="notice-date">${n.date} — ${n.detail}</div>
        </div>
    `).join('');
}
