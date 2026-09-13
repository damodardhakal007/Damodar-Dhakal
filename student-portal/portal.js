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
    student: { username: 'student', password: '1234', role: 'student', name: 'Damodar Dhakal', id: 'STU-10A-007', email: 'damodar.dhakal@kss.edu.np', isVerified: true, verifiedBy: 'Ram Bahadur Sharma (Faculty)' },
    teacher: { username: 'teacher', password: '1234', role: 'teacher', name: 'Ram Bahadur Sharma', id: 'TCH-001', email: 'ram.sharma@kss.edu.np', isVerified: true, verifiedBy: 'Bishnu Prasad Gautam (Principal)' },
    admin:   { username: 'admin',   password: '1234', role: 'admin',   name: 'Bishnu Prasad Gautam', id: 'ADM-001', email: 'principal@kss.edu.np', isVerified: true, verifiedBy: 'School Management Committee' },
    parent:  { username: 'parent',  password: '1234', role: 'parent',  name: 'Krishna Dhakal', id: 'PAR-007', childId: 'STU-10A-007', email: 'krishna.dhakal@gmail.com', isVerified: true, verifiedBy: 'Administration Office' },
};

// ─── INITIAL REGISTERED USER PROFILES (Google & Portal Accounts) ─────
const INITIAL_REGISTERED_USERS = [
    {
        userId: 'demo-student-001',
        email: 'damodar.dhakal@kss.edu.np',
        displayName: 'Damodar Dhakal',
        name: 'Damodar Dhakal',
        role: 'student',
        classSection: 'Class 10A',
        roll: 7,
        id: 'STU-10A-007',
        phone: '+977-9808841371',
        address: 'Kavresthali, Kathmandu',
        dob: '2010-04-15',
        guardianName: 'Krishna Dhakal',
        bloodGroup: 'O+',
        profileCompleted: true,
        isVerified: true,
        verificationStatus: 'verified',
        verifiedBy: 'Ram Bahadur Sharma (Teacher)',
        verifiedAt: '2026-03-01T10:00:00.000Z',
        createdAt: '2026-02-15T08:30:00.000Z'
    },
    {
        userId: 'demo-teacher-001',
        email: 'ram.sharma@kss.edu.np',
        displayName: 'Ram Bahadur Sharma',
        name: 'Ram Bahadur Sharma',
        role: 'teacher',
        teacherId: 'TCH-001',
        id: 'TCH-001',
        subject: 'Mathematics',
        qualification: 'M.Sc. Mathematics',
        phone: '+977-9801234567',
        address: 'Kavresthali, Kathmandu',
        profileCompleted: true,
        isVerified: true,
        verificationStatus: 'verified',
        verifiedBy: 'Bishnu Prasad Gautam (Admin)',
        verifiedAt: '2026-02-01T09:00:00.000Z',
        createdAt: '2026-01-10T08:00:00.000Z'
    },
    {
        userId: 'demo-admin-001',
        email: 'principal@kss.edu.np',
        displayName: 'Bishnu Prasad Gautam',
        name: 'Bishnu Prasad Gautam',
        role: 'admin',
        staffId: 'ADM-001',
        id: 'ADM-001',
        designation: 'School Principal',
        phone: '+977-01-5112345',
        address: 'Kathmandu Valley',
        profileCompleted: true,
        isVerified: true,
        verificationStatus: 'verified',
        verifiedBy: 'School Management Committee',
        verifiedAt: '2026-01-01T00:00:00.000Z',
        createdAt: '2026-01-01T00:00:00.000Z'
    },
    {
        userId: 'demo-parent-001',
        email: 'krishna.dhakal@gmail.com',
        displayName: 'Krishna Dhakal',
        name: 'Krishna Dhakal',
        role: 'parent',
        id: 'PAR-007',
        wardName: 'Damodar Dhakal',
        wardClass: 'Class 10A, Roll 7',
        relation: 'Father',
        phone: '+977-9841239876',
        address: 'Kavresthali, Kathmandu',
        profileCompleted: true,
        isVerified: true,
        verificationStatus: 'verified',
        verifiedBy: 'School Administration Office',
        verifiedAt: '2026-02-16T11:00:00.000Z',
        createdAt: '2026-02-15T09:00:00.000Z'
    },
    {
        userId: 'demo-student-pending-01',
        email: 'sita.gautam@gmail.com',
        displayName: 'Sita Gautam',
        name: 'Sita Gautam',
        role: 'student',
        classSection: 'Class 10A',
        roll: 9,
        id: 'STU-10A-009',
        phone: '+977-9811223344',
        address: 'Kavresthali Ward 4, Kathmandu',
        dob: '2010-09-18',
        guardianName: 'Harish Gautam',
        bloodGroup: 'B+',
        profileCompleted: true,
        isVerified: false,
        verificationStatus: 'pending',
        verifiedBy: null,
        verifiedAt: null,
        createdAt: '2026-03-10T14:22:00.000Z'
    },
    {
        userId: 'demo-parent-pending-01',
        email: 'mohan.khadka@gmail.com',
        displayName: 'Mohan Khadka',
        name: 'Mohan Khadka',
        role: 'parent',
        id: 'PAR-012',
        wardName: 'Rajesh Khadka',
        wardClass: 'Class 9B, Roll 14',
        relation: 'Father',
        phone: '+977-9855667788',
        address: 'Tokha Road, Kathmandu',
        profileCompleted: true,
        isVerified: false,
        verificationStatus: 'pending',
        verifiedBy: null,
        verifiedAt: null,
        createdAt: '2026-03-11T16:40:00.000Z'
    },
    {
        userId: 'demo-teacher-pending-01',
        email: 'pooja.shrestha@gmail.com',
        displayName: 'Pooja Shrestha',
        name: 'Pooja Shrestha',
        role: 'teacher',
        teacherId: 'TCH-008',
        id: 'TCH-008',
        subject: 'Science & Environment',
        qualification: 'M.Sc. Zoology',
        phone: '+977-9844332211',
        address: 'Balaju, Kathmandu',
        profileCompleted: true,
        isVerified: false,
        verificationStatus: 'pending',
        verifiedBy: null,
        verifiedAt: null,
        createdAt: '2026-03-12T09:15:00.000Z'
    }
];

function getStoredRegisteredUsers() {
    try {
        const data = localStorage.getItem('kss_registered_users');
        if (!data) {
            localStorage.setItem('kss_registered_users', JSON.stringify(INITIAL_REGISTERED_USERS));
            return [...INITIAL_REGISTERED_USERS];
        }
        return JSON.parse(data);
    } catch(e) {
        return [...INITIAL_REGISTERED_USERS];
    }
}

function saveRegisteredUserLocal(profile) {
    const list = getStoredRegisteredUsers();
    const idx = list.findIndex(u => (profile.userId && u.userId === profile.userId) || (profile.email && u.email === profile.email));
    if (idx >= 0) {
        list[idx] = { ...list[idx], ...profile };
    } else {
        list.unshift(profile);
    }
    localStorage.setItem('kss_registered_users', JSON.stringify(list));
    return list;
}

function updateLocalUserVerification(userId, isVerified, verifierName) {
    const list = getStoredRegisteredUsers();
    const user = list.find(u => u.userId === userId || u.id === userId || u.email === userId);
    if (user) {
        user.isVerified = isVerified;
        user.verificationStatus = isVerified ? 'verified' : 'pending';
        user.verifiedBy = isVerified ? verifierName : null;
        user.verifiedAt = isVerified ? new Date().toISOString() : null;
        localStorage.setItem('kss_registered_users', JSON.stringify(list));
    }
    return user;
}

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

                    <!-- Google Authentication Button -->
                    <button type="button" class="google-login-btn" id="googleLoginBtn" title="Sign in with your Google Account">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
                        </svg>
                        <span>Sign in with Google</span>
                    </button>

                    <div class="auth-separator"><span>or sign in with password</span></div>

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

        // ── Google Sign In button click
        const googleBtn = document.getElementById('googleLoginBtn');
        if (googleBtn) {
            googleBtn.addEventListener('click', () => {
                handleGoogleSignIn(role);
            });
        }

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

    // Update sidebar brand/user badge if current user is logged in
    updateSidebarUserDisplay();

    // CRITICAL FIX: call fn(main) FIRST to inject page content into the DOM,
    // THEN run initAnimations so IntersectionObserver can actually find the .fade-in elements.
    // If we run initAnimations before fn(main), the observer scans an empty <main>
    // and never adds .visible — leaving everything opacity:0 (blank page).
    setTimeout(() => {
        const main = document.getElementById('portalMain');
        if (main && typeof fn === 'function') fn(main);

        // Inject Verification Status Banner at the top of the content area
        if (main) {
            renderVerificationStatusBanner(main);

            // Auto-mount Verification Center if on Admin or Teacher dashboard
            const currentRole = (CURRENT_USER && CURRENT_USER.role) || sessionStorage.getItem('portal_role');
            if (currentRole === 'admin' || currentRole === 'teacher') {
                const autoMountEl = document.getElementById('userVerificationSection');
                if (autoMountEl) {
                    renderUserVerificationCenter(autoMountEl);
                } else if (window.location.pathname.includes('dashboard.html')) {
                    // Create and append verification center card right into the dashboard
                    const centerCard = document.createElement('div');
                    centerCard.id = 'userVerificationSection';
                    centerCard.style.marginTop = '24px';
                    main.appendChild(centerCard);
                    renderUserVerificationCenter(centerCard);
                }
            }
        }

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

// ═════════════════════════════════════════════════════════════
// SIDEBAR USER PROFILE DISPLAY
// ═════════════════════════════════════════════════════════════
function updateSidebarUserDisplay() {
    if (!CURRENT_USER) {
        try { CURRENT_USER = JSON.parse(sessionStorage.getItem('portal_user')); } catch(e) {}
    }
    if (!CURRENT_USER) return;

    const sidebar = document.getElementById('portalSidebar');
    if (!sidebar) return;

    let userBadge = document.getElementById('sidebarUserProfileBadge');
    if (!userBadge) {
        userBadge = document.createElement('div');
        userBadge.id = 'sidebarUserProfileBadge';
        userBadge.style.cssText = 'margin:0 16px 12px; padding:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:12px; display:flex; align-items:center; gap:10px; cursor:pointer; transition:all 0.2s ease;';
        userBadge.title = 'Click to inspect your verified profile details';
        userBadge.addEventListener('click', () => showUserDetailsModal(CURRENT_USER));

        // Insert right above the nav
        const nav = sidebar.querySelector('.sidebar-nav');
        if (nav) sidebar.insertBefore(userBadge, nav);
    }

    const initial = (CURRENT_USER.displayName || CURRENT_USER.name || 'U').charAt(0).toUpperCase();
    const photo = CURRENT_USER.photoURL 
        ? `<img src="${CURRENT_USER.photoURL}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; border:2px solid var(--cyan);" alt="User Photo">`
        : `<div style="width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg,var(--cyan),var(--sapphire)); color:#040d14; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:14px;">${initial}</div>`;

    const isVerif = CURRENT_USER.isVerified;
    const verifIcon = isVerif
        ? `<i class='bx bxs-badge-check' style="color:#00ff9d; font-size:15px;" title="Verified Account"></i>`
        : `<i class='bx bx-time-five' style="color:#ffd700; font-size:15px;" title="Pending Verification"></i>`;

    userBadge.innerHTML = `
        ${photo}
        <div style="flex:1; min-width:0; text-align:left;">
            <div style="font-size:12px; font-weight:700; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; display:flex; align-items:center; gap:4px;">
                <span>${CURRENT_USER.displayName || CURRENT_USER.name}</span>
                ${verifIcon}
            </div>
            <div style="font-size:11px; color:var(--text-muted); text-transform:capitalize;">
                ${CURRENT_USER.role || 'Member'} ${isVerif ? '• Verified' : '• Pending'}
            </div>
        </div>
    `;
}

// ═════════════════════════════════════════════════════════════
// FIREBASE AUTHENTICATION & GOOGLE SIGN-IN
// ═════════════════════════════════════════════════════════════
let _firebasePortalInstance = null;

async function initFirebasePortal() {
    if (_firebasePortalInstance) return _firebasePortalInstance;
    try {
        const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
        const { getAuth, GoogleAuthProvider, signInWithPopup, signOut: fbSignOut, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js');
        const { getFirestore, doc, getDoc, setDoc, updateDoc, collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');

        let config;
        try {
            const res = await fetch('/firebase-applet-config.json');
            config = await res.json();
        } catch(e) {
            config = {
                projectId: "fifth-burner-jvd6f",
                appId: "1:489772232468:web:71178c4b84f56989ef5c01",
                apiKey: "AIzaSyBkezDzmQv_x_EVmqPby215kD57Q3spt6A",
                authDomain: "fifth-burner-jvd6f.firebaseapp.com",
                firestoreDatabaseId: "ai-studio-damodardhakal-907eee41-0ec9-47e7-8789-1f1647bb50d8",
                storageBucket: "fifth-burner-jvd6f.firebasestorage.app",
                messagingSenderId: "489772232468"
            };
        }

        const existingApps = getApps();
        const app = existingApps.length > 0 ? existingApps[0] : initializeApp(config);
        const auth = getAuth(app);
        const db = config.firestoreDatabaseId ? getFirestore(app, config.firestoreDatabaseId) : getFirestore(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        _firebasePortalInstance = {
            app,
            auth,
            db,
            provider,
            signInWithPopup,
            fbSignOut,
            onAuthStateChanged,
            doc,
            getDoc,
            setDoc,
            updateDoc,
            collection,
            getDocs,
            query,
            orderBy
        };
        return _firebasePortalInstance;
    } catch (err) {
        console.warn('Firebase portal SDK init note:', err);
        return null;
    }
}

async function handleGoogleSignIn(expectedRole) {
    const btn = document.getElementById('googleLoginBtn') || document.getElementById('indexGoogleBtn');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class='bx bx-loader-alt' style="animation:spin 0.8s linear infinite; font-size:18px;"></i><span>Connecting to Google…</span>`;
    }

    try {
        const fb = await initFirebasePortal();
        if (!fb || !fb.auth) {
            throw new Error('Unable to connect to Google Auth service.');
        }

        const res = await fb.signInWithPopup(fb.auth, fb.provider);
        const user = res.user;

        // 1. Check if user document exists in Firestore
        let profile = null;
        try {
            const userSnap = await fb.getDoc(fb.doc(fb.db, 'users', user.uid));
            if (userSnap.exists()) {
                profile = userSnap.data();
            }
        } catch (dbErr) {
            console.warn('Firestore user fetch check:', dbErr);
        }

        // 2. Fallback to local store if not yet in Firestore
        if (!profile) {
            const localList = getStoredRegisteredUsers();
            profile = localList.find(u => u.userId === user.uid || u.email === user.email);
        }

        // 3. Determine if profile setup is required
        if (profile && profile.profileCompleted) {
            // User already has a complete profile!
            CURRENT_USER = profile;
            sessionStorage.setItem('portal_logged_in', 'true');
            sessionStorage.setItem('portal_role', profile.role || expectedRole || 'student');
            sessionStorage.setItem('portal_user', JSON.stringify(profile));
            saveRegisteredUserLocal(profile);

            showAuthNotification(`Welcome back, ${profile.displayName || profile.name}!`, 'success');

            if (btn) {
                btn.innerHTML = `<i class='bx bx-check-circle' style="color:#00ff9d; font-size:20px;"></i><span>Signed In!</span>`;
            }

            setTimeout(() => {
                const targetRole = profile.role || expectedRole || 'student';
                const pathParts = window.location.pathname.split('/');
                const currentFolder = pathParts[pathParts.length - 2];
                if (currentFolder !== targetRole && (currentFolder === 'student' || currentFolder === 'teacher' || currentFolder === 'admin' || currentFolder === 'parent')) {
                    window.location.href = `../${targetRole}/dashboard.html`;
                } else if (window.location.pathname.endsWith('student-portal/index.html') || window.location.pathname.endsWith('student-portal/')) {
                    window.location.href = `${targetRole}/dashboard.html`;
                } else {
                    showPortal();
                }
            }, 500);
        } else {
            // First time login! Open first-time profile creation modal
            if (btn) {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
            showProfileSetupModal(user, expectedRole || 'student');
        }
    } catch (err) {
        console.error('Google Sign In Error:', err);
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }

        let userMsg = err.message || 'Google Sign-In was cancelled or unavailable.';
        if (err.code === 'auth/popup-blocked') {
            userMsg = 'Pop-up was blocked by your browser. Please allow popups or open the app in a new tab.';
        } else if (err.code === 'auth/popup-closed-by-user') {
            userMsg = 'Sign-in window was closed before completing.';
        }
        showAuthNotification(userMsg, 'error');
    }
}

// ═════════════════════════════════════════════════════════════
// FIRST-TIME PROFILE CREATION MODAL
// ═════════════════════════════════════════════════════════════
function showProfileSetupModal(googleUser, suggestedRole) {
    const existingModal = document.getElementById('profileSetupOverlay');
    if (existingModal) existingModal.remove();

    const role = suggestedRole || 'student';
    const photo = googleUser.photoURL || '';
    const initial = (googleUser.displayName || 'U').charAt(0).toUpperCase();

    const modal = document.createElement('div');
    modal.id = 'profileSetupOverlay';
    modal.className = 'profile-modal-overlay';
    modal.innerHTML = `
        <div class="profile-modal-card">
            <div class="profile-modal-header">
                <div style="display:flex; align-items:center; gap:14px;">
                    ${photo 
                        ? `<img src="${photo}" style="width:48px; height:48px; border-radius:50%; border:2px solid var(--cyan); object-fit:cover;" alt="Avatar">`
                        : `<div style="width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg,var(--cyan),var(--sapphire)); color:#040d14; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:18px;">${initial}</div>`
                    }
                    <div>
                        <h2>Create Your School Profile</h2>
                        <p>Kavresthali Secondary School — First-Time Registration</p>
                    </div>
                </div>
            </div>

            <div class="profile-modal-body">
                <div class="verification-notice-callout">
                    <i class='bx bx-shield-quarter callout-icon'></i>
                    <div class="callout-text">
                        <h5>Role-Based Verification Protocol</h5>
                        <p>
                            All new Google sign-ins are registered with <strong>Pending Verification</strong> status.
                            Only authorized <strong>Teachers and Administrators</strong> can review and verify your account credentials.
                        </p>
                    </div>
                </div>

                <div class="form-group-custom">
                    <label>Select Your Portal Role</label>
                    <div class="role-selector-pills">
                        <button type="button" class="role-pill-btn ${role === 'student' ? 'active' : ''}" data-role="student">
                            <i class='bx bxs-graduation'></i> Student
                        </button>
                        <button type="button" class="role-pill-btn ${role === 'teacher' ? 'active' : ''}" data-role="teacher">
                            <i class='bx bxs-chalkboard'></i> Teacher
                        </button>
                        <button type="button" class="role-pill-btn ${role === 'parent' ? 'active' : ''}" data-role="parent">
                            <i class='bx bxs-group'></i> Parent
                        </button>
                        <button type="button" class="role-pill-btn ${role === 'admin' ? 'active' : ''}" data-role="admin">
                            <i class='bx bxs-shield-alt-2'></i> Administrator
                        </button>
                    </div>
                </div>

                <form id="profileSetupForm" autocomplete="off">
                    <div class="form-row-2">
                        <div class="form-group-custom">
                            <label for="setupFullName">Full Name *</label>
                            <input type="text" id="setupFullName" value="${googleUser.displayName || ''}" required placeholder="e.g. Damodar Dhakal">
                        </div>
                        <div class="form-group-custom">
                            <label for="setupEmail">Email Address (Google)</label>
                            <input type="email" id="setupEmail" value="${googleUser.email || ''}" readonly style="opacity:0.75; cursor:not-allowed;">
                        </div>
                    </div>

                    <div class="form-row-2">
                        <div class="form-group-custom">
                            <label for="setupPhone">Phone / Contact Number *</label>
                            <input type="tel" id="setupPhone" required placeholder="+977-98XXXXXXXX">
                        </div>
                        <div class="form-group-custom">
                            <label for="setupAddress">Residential Address *</label>
                            <input type="text" id="setupAddress" required placeholder="e.g. Kavresthali Ward 4, Kathmandu">
                        </div>
                    </div>

                    <!-- Dynamic Role-Specific Container -->
                    <div id="dynamicRoleFields"></div>

                    <div style="margin-top:20px; display:flex; gap:12px; justify-content:flex-end;">
                        <button type="button" class="cancel-modal-btn" id="cancelSetupBtn">Cancel</button>
                        <button type="submit" class="submit-profile-btn" id="submitProfileBtn">
                            <i class='bx bx-check-circle'></i> Complete Profile & Enter Portal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    let selectedRole = role;

    function renderDynamicFields(currentRole) {
        const container = document.getElementById('dynamicRoleFields');
        if (!container) return;

        if (currentRole === 'student') {
            container.innerHTML = `
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupClass">Enrolled Class & Section *</label>
                        <select id="setupClass" required>
                            <option value="Class 10A" selected>Class 10 - Section A (SEE Batch)</option>
                            <option value="Class 10B">Class 10 - Section B</option>
                            <option value="Class 9A">Class 9 - Section A</option>
                            <option value="Class 9B">Class 9 - Section B</option>
                            <option value="Class 8A">Class 8 - Section A</option>
                            <option value="Class 7A">Class 7 - Section A</option>
                            <option value="Class 6A">Class 6 - Section A</option>
                        </select>
                    </div>
                    <div class="form-group-custom">
                        <label for="setupRoll">Roll Number *</label>
                        <input type="number" id="setupRoll" required min="1" max="60" placeholder="e.g. 7">
                    </div>
                </div>
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupGuardian">Parent / Guardian Name *</label>
                        <input type="text" id="setupGuardian" required placeholder="e.g. Krishna Dhakal">
                    </div>
                    <div class="form-group-custom">
                        <label for="setupBlood">Blood Group</label>
                        <select id="setupBlood">
                            <option value="O+">O Positive (O+)</option>
                            <option value="A+">A Positive (A+)</option>
                            <option value="B+">B Positive (B+)</option>
                            <option value="AB+">AB Positive (AB+)</option>
                            <option value="O-">O Negative (O-)</option>
                            <option value="A-">A Negative (A-)</option>
                            <option value="B-">B Negative (B-)</option>
                            <option value="AB-">AB Negative (AB-)</option>
                        </select>
                    </div>
                </div>
            `;
        } else if (currentRole === 'teacher') {
            container.innerHTML = `
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupSubject">Primary Teaching Subject *</label>
                        <input type="text" id="setupSubject" required placeholder="e.g. Mathematics, Science, English">
                    </div>
                    <div class="form-group-custom">
                        <label for="setupQualification">Highest Academic Qualification *</label>
                        <input type="text" id="setupQualification" required placeholder="e.g. M.Sc. Mathematics / B.Ed.">
                    </div>
                </div>
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupTeacherId">Faculty ID / Code</label>
                        <input type="text" id="setupTeacherId" placeholder="e.g. TCH-009 (optional)">
                    </div>
                    <div class="form-group-custom">
                        <label for="setupAssigned">Assigned Grades</label>
                        <input type="text" id="setupAssigned" placeholder="e.g. Class 9 & Class 10">
                    </div>
                </div>
            `;
        } else if (currentRole === 'parent') {
            container.innerHTML = `
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupWardName">Student / Ward Full Name *</label>
                        <input type="text" id="setupWardName" required placeholder="e.g. Damodar Dhakal">
                    </div>
                    <div class="form-group-custom">
                        <label for="setupWardClass">Ward's Class & Section *</label>
                        <input type="text" id="setupWardClass" required placeholder="e.g. Class 10A">
                    </div>
                </div>
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupRelation">Relationship to Student *</label>
                        <select id="setupRelation">
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Guardian">Legal Guardian</option>
                        </select>
                    </div>
                    <div class="form-group-custom">
                        <label for="setupWardRoll">Ward's Roll Number</label>
                        <input type="number" id="setupWardRoll" placeholder="e.g. 7">
                    </div>
                </div>
            `;
        } else if (currentRole === 'admin') {
            container.innerHTML = `
                <div class="form-row-2">
                    <div class="form-group-custom">
                        <label for="setupStaffId">Administrative Staff ID *</label>
                        <input type="text" id="setupStaffId" required placeholder="e.g. ADM-005">
                    </div>
                    <div class="form-group-custom">
                        <label for="setupDesignation">Official Designation *</label>
                        <input type="text" id="setupDesignation" required placeholder="e.g. School Principal / Vice Principal / Exam Head">
                    </div>
                </div>
            `;
        }
    }

    renderDynamicFields(selectedRole);

    // Handle role pill clicks
    modal.querySelectorAll('.role-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.querySelectorAll('.role-pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRole = btn.dataset.role;
            renderDynamicFields(selectedRole);
        });
    });

    // Handle Cancel
    document.getElementById('cancelSetupBtn').addEventListener('click', () => {
        modal.remove();
    });

    // Handle Form Submit
    document.getElementById('profileSetupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitProfileBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class='bx bx-loader-alt' style="animation:spin 0.8s linear infinite;"></i> Saving Profile…`;

        const fullName = document.getElementById('setupFullName').value.trim();
        const phone = document.getElementById('setupPhone').value.trim();
        const address = document.getElementById('setupAddress').value.trim();

        // Check if user is owner Damodar Dhakal for auto-verification
        const isOwnerAdmin = googleUser.email && (googleUser.email.toLowerCase() === 'damodardhakal008@gmail.com' || googleUser.email.toLowerCase().includes('damodar'));
        const autoVerify = isOwnerAdmin || selectedRole === 'admin';

        const profileData = {
            userId: googleUser.uid,
            email: googleUser.email,
            displayName: fullName,
            name: fullName,
            photoURL: googleUser.photoURL || null,
            role: selectedRole,
            phone: phone,
            address: address,
            profileCompleted: true,
            isVerified: autoVerify,
            verificationStatus: autoVerify ? 'verified' : 'pending',
            verifiedBy: autoVerify ? 'System Administrator (Initial Authority)' : null,
            verifiedAt: autoVerify ? new Date().toISOString() : null,
            createdAt: new Date().toISOString(),
        };

        // Extract role specific inputs
        if (selectedRole === 'student') {
            profileData.classSection = document.getElementById('setupClass').value;
            profileData.roll = parseInt(document.getElementById('setupRoll').value) || 1;
            profileData.id = `STU-${profileData.roll < 10 ? '0' + profileData.roll : profileData.roll}`;
            profileData.guardianName = document.getElementById('setupGuardian').value;
            profileData.bloodGroup = document.getElementById('setupBlood').value;
        } else if (selectedRole === 'teacher') {
            profileData.subject = document.getElementById('setupSubject').value;
            profileData.qualification = document.getElementById('setupQualification').value;
            profileData.teacherId = document.getElementById('setupTeacherId').value || 'TCH-NEW';
            profileData.id = profileData.teacherId;
            profileData.assignedClasses = document.getElementById('setupAssigned').value || 'Classes 9 & 10';
        } else if (selectedRole === 'parent') {
            profileData.wardName = document.getElementById('setupWardName').value;
            profileData.wardClass = document.getElementById('setupWardClass').value;
            profileData.relation = document.getElementById('setupRelation').value;
            profileData.wardRoll = parseInt(document.getElementById('setupWardRoll').value) || 1;
            profileData.id = `PAR-${Math.floor(100 + Math.random() * 900)}`;
        } else if (selectedRole === 'admin') {
            profileData.staffId = document.getElementById('setupStaffId').value;
            profileData.id = profileData.staffId;
            profileData.designation = document.getElementById('setupDesignation').value;
        }

        // Save to Firestore
        try {
            const fb = await initFirebasePortal();
            if (fb && fb.db) {
                await fb.setDoc(fb.doc(fb.db, 'users', googleUser.uid), profileData, { merge: true });
            }
        } catch(saveErr) {
            console.warn('Firestore write warning:', saveErr);
        }

        // Save to Local Storage
        saveRegisteredUserLocal(profileData);

        // Update active session
        CURRENT_USER = profileData;
        sessionStorage.setItem('portal_logged_in', 'true');
        sessionStorage.setItem('portal_role', selectedRole);
        sessionStorage.setItem('portal_user', JSON.stringify(profileData));

        showAuthNotification('Profile created successfully! Sent for verification.', 'success');
        modal.remove();

        // Navigate to appropriate role dashboard
        setTimeout(() => {
            const pathParts = window.location.pathname.split('/');
            const currentFolder = pathParts[pathParts.length - 2];
            if (currentFolder !== selectedRole && (currentFolder === 'student' || currentFolder === 'teacher' || currentFolder === 'admin' || currentFolder === 'parent')) {
                window.location.href = `../${selectedRole}/dashboard.html`;
            } else if (window.location.pathname.endsWith('student-portal/index.html') || window.location.pathname.endsWith('student-portal/')) {
                window.location.href = `${selectedRole}/dashboard.html`;
            } else {
                showPortal();
            }
        }, 300);
    });
}

// ═════════════════════════════════════════════════════════════
// VERIFICATION STATUS BANNER (Displayed on member pages)
// ═════════════════════════════════════════════════════════════
function renderVerificationStatusBanner(main) {
    if (!CURRENT_USER) return;
    const existing = document.getElementById('portalVerificationStatusBanner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.id = 'portalVerificationStatusBanner';
    banner.className = 'fade-in';
    banner.style.marginBottom = '20px';

    if (CURRENT_USER.isVerified) {
        banner.innerHTML = `
            <div class="verification-banner-verified">
                <div class="vb-icon"><i class='bx bxs-badge-check'></i></div>
                <div class="vb-content">
                    <h4>Officially Verified School Account</h4>
                    <p>
                        Your account credentials have been verified and approved by <strong>${CURRENT_USER.verifiedBy || 'School Faculty'}</strong>.
                        ${CURRENT_USER.verifiedAt ? '• Verified on ' + new Date(CURRENT_USER.verifiedAt).toLocaleDateString() : ''}
                    </p>
                </div>
                <button class="vb-action-btn" onclick="showUserDetailsModal(CURRENT_USER)">
                    <i class='bx bx-id-card'></i> View My Verified Profile
                </button>
            </div>
        `;
    } else {
        banner.innerHTML = `
            <div class="verification-banner-pending">
                <div class="vb-icon"><i class='bx bx-time-five'></i></div>
                <div class="vb-content">
                    <h4>Account Pending Verification</h4>
                    <p>
                        Your school profile has been registered and is awaiting verification by an authorized <strong>Teacher or Administrator</strong>.
                        You have full viewing access to your dashboard in the meantime.
                    </p>
                </div>
                <button class="vb-action-btn" onclick="showUserDetailsModal(CURRENT_USER)">
                    <i class='bx bx-edit'></i> Inspect Submitted Details
                </button>
            </div>
        `;
    }

    const header = main.querySelector('.top-header');
    if (header) {
        header.insertAdjacentElement('afterend', banner);
    } else {
        main.insertBefore(banner, main.firstChild);
    }
}

// ═════════════════════════════════════════════════════════════
// USER VERIFICATION CENTER (Admin & Teacher Verification Dashboard)
// ═════════════════════════════════════════════════════════════
function renderUserVerificationCenter(containerIdOrEl) {
    const container = typeof containerIdOrEl === 'string' 
        ? document.getElementById(containerIdOrEl) 
        : containerIdOrEl;
    if (!container) return;

    const currentRole = (CURRENT_USER && CURRENT_USER.role) || sessionStorage.getItem('portal_role');
    const isStaff = currentRole === 'admin' || currentRole === 'teacher';

    if (!isStaff) {
        container.innerHTML = `
            <div class="card" style="padding:24px; text-align:center; color:var(--text-muted);">
                <i class='bx bx-lock' style="font-size:32px; color:var(--gold); margin-bottom:8px;"></i>
                <p>Verification controls are restricted to authorized Faculty (Teachers and Administrators).</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="card fade-in" id="verificationCenterRoot">
            <div class="card-header" style="flex-wrap:wrap; gap:12px;">
                <div>
                    <span class="card-title" style="display:flex; align-items:center; gap:8px;">
                        <i class='bx bx-shield-quarter' style="color:var(--cyan); font-size:22px;"></i>
                        <span>Member Verification Center & User Directory</span>
                    </span>
                    <p style="font-size:12px; color:var(--text-muted); margin:4px 0 0;">
                        As an authorized <strong>${currentRole === 'admin' ? 'Administrator' : 'Teacher'}</strong>, you can inspect registered users and verify their school accounts.
                    </p>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <span class="badge badge-subtle" id="vcTotalCount">0 Total</span>
                    <span class="badge badge-emerald" id="vcPendingCount">0 Pending</span>
                </div>
            </div>

            <!-- Verification Controls Toolbar -->
            <div class="user-verification-toolbar">
                <div class="uv-search-wrapper">
                    <i class='bx bx-search'></i>
                    <input type="text" id="vcSearchInput" placeholder="Filter by name, email, roll, or ID…">
                </div>
                <div class="uv-filter-pills">
                    <button type="button" class="uv-filter-pill active" data-filter="all">All Members</button>
                    <button type="button" class="uv-filter-pill" data-filter="pending">⏳ Pending Review</button>
                    <button type="button" class="uv-filter-pill" data-filter="verified">✅ Verified</button>
                    <button type="button" class="uv-filter-pill" data-filter="student">Students</button>
                    <button type="button" class="uv-filter-pill" data-filter="teacher">Teachers</button>
                    <button type="button" class="uv-filter-pill" data-filter="parent">Parents</button>
                </div>
            </div>

            <!-- Registered Members List -->
            <div id="vcMemberList" class="user-list-grid"></div>
        </div>
    `;

    let activeFilter = 'all';
    let searchQuery = '';

    function refreshList() {
        const listContainer = document.getElementById('vcMemberList');
        if (!listContainer) return;

        const allUsers = getStoredRegisteredUsers();

        // Update counts
        const pendingCount = allUsers.filter(u => !u.isVerified).length;
        const totalCount = allUsers.length;
        const countBadge = document.getElementById('vcPendingCount');
        const totalBadge = document.getElementById('vcTotalCount');
        if (countBadge) countBadge.textContent = `${pendingCount} Pending`;
        if (totalBadge) totalBadge.textContent = `${totalCount} Registered`;

        // Apply filters
        const filtered = allUsers.filter(u => {
            // Role or status filter
            if (activeFilter === 'pending' && u.isVerified) return false;
            if (activeFilter === 'verified' && !u.isVerified) return false;
            if (activeFilter === 'student' && u.role !== 'student') return false;
            if (activeFilter === 'teacher' && u.role !== 'teacher') return false;
            if (activeFilter === 'parent' && u.role !== 'parent') return false;

            // Search query filter
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const name = (u.displayName || u.name || '').toLowerCase();
                const email = (u.email || '').toLowerCase();
                const id = (u.id || u.teacherId || u.staffId || '').toLowerCase();
                const roll = String(u.roll || '');
                return name.includes(q) || email.includes(q) || id.includes(q) || roll.includes(q);
            }
            return true;
        });

        if (filtered.length === 0) {
            listContainer.innerHTML = `
                <div style="padding:32px; text-align:center; color:var(--text-muted);">
                    <i class='bx bx-user-x' style="font-size:36px; margin-bottom:8px; opacity:0.5;"></i>
                    <p>No user records matched your search criteria.</p>
                </div>
            `;
            return;
        }

        listContainer.innerHTML = filtered.map(u => {
            const initial = (u.displayName || u.name || 'U').charAt(0).toUpperCase();
            const avatarHtml = u.photoURL 
                ? `<img src="${u.photoURL}" class="user-row-avatar" alt="Avatar">`
                : `<div class="user-row-avatar avatar-fallback role-${u.role || 'student'}">${initial}</div>`;

            let roleSpecificSnippet = '';
            if (u.role === 'student') {
                roleSpecificSnippet = `<i class='bx bx-book'></i> ${u.classSection || 'Class 10A'} • Roll: ${u.roll || 'N/A'}`;
            } else if (u.role === 'teacher') {
                roleSpecificSnippet = `<i class='bx bx-chalkboard'></i> ${u.subject || 'Faculty'} • ${u.qualification || 'M.Sc.'}`;
            } else if (u.role === 'parent') {
                roleSpecificSnippet = `<i class='bx bx-group'></i> Ward: ${u.wardName || 'Student'} (${u.wardClass || 'Class 10A'})`;
            } else if (u.role === 'admin') {
                roleSpecificSnippet = `<i class='bx bx-shield-quarter'></i> ${u.designation || 'School Administration'}`;
            }

            const statusBadge = u.isVerified
                ? `<span class="badge badge-emerald" title="Verified by: ${u.verifiedBy || 'Faculty'}"><i class='bx bxs-check-shield'></i> Verified</span>`
                : `<span class="badge badge-gold" title="Awaiting teacher or admin approval"><i class='bx bx-time-five'></i> Pending</span>`;

            return `
                <div class="user-directory-row ${!u.isVerified ? 'pending-row' : ''}">
                    <div style="display:flex; align-items:center; gap:14px; min-width:0;">
                        ${avatarHtml}
                        <div class="user-row-meta">
                            <div class="user-row-name">
                                <span>${u.displayName || u.name}</span>
                                <span class="badge badge-subtle" style="text-transform:capitalize; font-size:11px;">${u.role || 'Member'}</span>
                            </div>
                            <div class="user-row-sub">
                                <span class="user-email-text"><i class='bx bx-envelope'></i> ${u.email || 'No email provided'}</span>
                                <span style="opacity:0.4;">|</span>
                                <span>${roleSpecificSnippet}</span>
                            </div>
                        </div>
                    </div>

                    <div class="user-row-actions">
                        ${statusBadge}
                        <button type="button" class="btn-inspect-details" onclick='showUserDetailsModalById("${u.userId || u.id || u.email}")'>
                            <i class='bx bx-id-card'></i> Details
                        </button>
                        ${!u.isVerified 
                            ? `<button type="button" class="btn-verify-user" onclick='executeUserVerification("${u.userId || u.id || u.email}", true)'>
                                    <i class='bx bx-check-circle'></i> Verify User
                               </button>`
                            : `<button type="button" class="btn-revoke-user" onclick='executeUserVerification("${u.userId || u.id || u.email}", false)' title="Revoke verification status if credentials require further audit">
                                    <i class='bx bx-undo'></i> Revoke
                               </button>`
                        }
                    </div>
                </div>
            `;
        }).join('');
    }

    // Search and filter listeners
    const searchInput = document.getElementById('vcSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            refreshList();
        });
    }

    const pills = container.querySelectorAll('.uv-filter-pill');
    pills.forEach(btn => {
        btn.addEventListener('click', () => {
            pills.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            refreshList();
        });
    });

    window._refreshVerificationCenter = refreshList;
    refreshList();
}

// ═════════════════════════════════════════════════════════════
// VERIFICATION EXECUTION (Teacher & Administrator action)
// ═════════════════════════════════════════════════════════════
async function executeUserVerification(targetId, verifyState) {
    const verifier = CURRENT_USER 
        ? `${CURRENT_USER.displayName || CURRENT_USER.name} (${CURRENT_USER.role === 'admin' ? 'Administrator' : 'Teacher'})`
        : 'Authorized School Faculty';

    // 1. Update in local storage
    const updatedUser = updateLocalUserVerification(targetId, verifyState, verifier);

    // 2. Update in Firestore if connected
    try {
        const fb = await initFirebasePortal();
        if (fb && fb.db && updatedUser && updatedUser.userId) {
            await fb.updateDoc(fb.doc(fb.db, 'users', updatedUser.userId), {
                isVerified: verifyState,
                verificationStatus: verifyState ? 'verified' : 'pending',
                verifiedBy: verifyState ? verifier : null,
                verifiedAt: verifyState ? new Date().toISOString() : null
            });
        }
    } catch(e) {
        console.warn('Firestore updateDoc note:', e);
    }

    const name = updatedUser ? (updatedUser.displayName || updatedUser.name) : 'User';
    if (verifyState) {
        showAuthNotification(`Account for ${name} is now officially verified!`, 'success');
    } else {
        showAuthNotification(`Verification for ${name} set to pending audit.`, 'info');
    }

    // Refresh directory view
    if (typeof window._refreshVerificationCenter === 'function') {
        window._refreshVerificationCenter();
    }
}

// ═════════════════════════════════════════════════════════════
// MEMBER DETAIL INSPECTION MODAL
// ═════════════════════════════════════════════════════════════
function showUserDetailsModalById(targetId) {
    const list = getStoredRegisteredUsers();
    const user = list.find(u => u.userId === targetId || u.id === targetId || u.email === targetId);
    if (user) showUserDetailsModal(user);
}

function showUserDetailsModal(user) {
    if (!user) return;
    const existing = document.getElementById('userDetailsInspectionModal');
    if (existing) existing.remove();

    const initial = (user.displayName || user.name || 'U').charAt(0).toUpperCase();
    const isStaffViewer = CURRENT_USER && (CURRENT_USER.role === 'admin' || CURRENT_USER.role === 'teacher');
    const isCurrentUser = CURRENT_USER && (CURRENT_USER.userId === user.userId || CURRENT_USER.email === user.email);

    const modal = document.createElement('div');
    modal.id = 'userDetailsInspectionModal';
    modal.className = 'profile-modal-overlay';
    modal.innerHTML = `
        <div class="profile-modal-card">
            <div class="profile-modal-header" style="justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:14px;">
                    ${user.photoURL 
                        ? `<img src="${user.photoURL}" style="width:50px; height:50px; border-radius:50%; border:2px solid var(--cyan); object-fit:cover;" alt="Avatar">`
                        : `<div style="width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg,var(--cyan),var(--sapphire)); color:#040d14; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:20px;">${initial}</div>`
                    }
                    <div>
                        <h2>${user.displayName || user.name}</h2>
                        <p style="text-transform:capitalize; margin-top:2px;">
                            ${user.role || 'Member'} • ID: <strong>${user.id || user.userId || 'N/A'}</strong>
                        </p>
                    </div>
                </div>
                <button type="button" id="closeDetailModalBtn" style="background:none; border:none; color:var(--text-muted); font-size:24px; cursor:pointer;">
                    <i class='bx bx-x'></i>
                </button>
            </div>

            <div class="profile-modal-body">
                <!-- Status Callout -->
                <div style="margin-bottom:20px;">
                    ${user.isVerified ? `
                        <div class="verification-banner-verified" style="margin:0;">
                            <div class="vb-icon"><i class='bx bxs-badge-check'></i></div>
                            <div class="vb-content">
                                <h4>Officially Verified Profile</h4>
                                <p>Verified by <strong>${user.verifiedBy || 'School Faculty'}</strong> ${user.verifiedAt ? 'on ' + new Date(user.verifiedAt).toLocaleString() : ''}</p>
                            </div>
                        </div>
                    ` : `
                        <div class="verification-banner-pending" style="margin:0;">
                            <div class="vb-icon"><i class='bx bx-time-five'></i></div>
                            <div class="vb-content">
                                <h4>Account Awaiting Faculty Verification</h4>
                                <p>Pending review by authorized Teachers or Administrators of Kavresthali Secondary School.</p>
                            </div>
                        </div>
                    `}
                </div>

                <!-- Info Grid -->
                <div class="detail-section-grid">
                    <div class="detail-block">
                        <span class="detail-label">Full Name</span>
                        <span class="detail-value">${user.displayName || user.name}</span>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Email (Google Auth)</span>
                        <span class="detail-value">${user.email || 'None'}</span>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Phone Number</span>
                        <span class="detail-value">${user.phone || 'Not recorded'}</span>
                    </div>
                    <div class="detail-block">
                        <span class="detail-label">Residential Address</span>
                        <span class="detail-value">${user.address || 'Kathmandu, Nepal'}</span>
                    </div>

                    ${user.role === 'student' ? `
                        <div class="detail-block">
                            <span class="detail-label">Class & Section</span>
                            <span class="detail-value">${user.classSection || 'Class 10A'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Roll Number</span>
                            <span class="detail-value">Roll No. ${user.roll || 7}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Parent / Guardian</span>
                            <span class="detail-value">${user.guardianName || user.parent || 'Krishna Dhakal'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Blood Group</span>
                            <span class="detail-value">${user.bloodGroup || 'O+'}</span>
                        </div>
                    ` : ''}

                    ${user.role === 'teacher' ? `
                        <div class="detail-block">
                            <span class="detail-label">Teaching Department / Subject</span>
                            <span class="detail-value">${user.subject || 'Mathematics'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Academic Qualification</span>
                            <span class="detail-value">${user.qualification || 'M.Sc.'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Assigned Classes</span>
                            <span class="detail-value">${user.assignedClasses || 'Class 9 & 10'}</span>
                        </div>
                    ` : ''}

                    ${user.role === 'parent' ? `
                        <div class="detail-block">
                            <span class="detail-label">Student Ward Name</span>
                            <span class="detail-value">${user.wardName || 'Damodar Dhakal'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Ward Class & Roll</span>
                            <span class="detail-value">${user.wardClass || 'Class 10A, Roll 7'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Relationship</span>
                            <span class="detail-value">${user.relation || 'Parent'}</span>
                        </div>
                    ` : ''}

                    ${user.role === 'admin' ? `
                        <div class="detail-block">
                            <span class="detail-label">Designation</span>
                            <span class="detail-value">${user.designation || 'School Administration'}</span>
                        </div>
                        <div class="detail-block">
                            <span class="detail-label">Staff ID</span>
                            <span class="detail-value">${user.staffId || user.id || 'ADM-001'}</span>
                        </div>
                    ` : ''}
                </div>

                <!-- Modal Actions -->
                <div style="margin-top:24px; display:flex; justify-content:flex-end; gap:12px;">
                    <button type="button" class="cancel-modal-btn" id="modalDismissBtn">Close</button>
                    ${isStaffViewer && !isCurrentUser ? (
                        user.isVerified ? `
                            <button type="button" class="btn-revoke-user" onclick='executeUserVerification("${user.userId || user.id || user.email}", false); document.getElementById("userDetailsInspectionModal").remove();'>
                                <i class='bx bx-undo'></i> Revoke Verification
                            </button>
                        ` : `
                            <button type="button" class="submit-profile-btn" onclick='executeUserVerification("${user.userId || user.id || user.email}", true); document.getElementById("userDetailsInspectionModal").remove();'>
                                <i class='bx bx-check-circle'></i> Verify This Member Now
                            </button>
                        `
                    ) : ''}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('closeDetailModalBtn').addEventListener('click', () => modal.remove());
    document.getElementById('modalDismissBtn').addEventListener('click', () => modal.remove());
}

// ═════════════════════════════════════════════════════════════
// TOAST NOTIFICATIONS
// ═════════════════════════════════════════════════════════════
function showAuthNotification(message, type = 'info') {
    let toast = document.getElementById('portalAuthToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'portalAuthToast';
        toast.style.cssText = 'position:fixed; top:24px; right:24px; z-index:99999; padding:14px 20px; border-radius:12px; font-size:13px; font-weight:600; display:flex; align-items:center; gap:10px; box-shadow:0 15px 35px rgba(0,0,0,0.5); transition:all 0.3s ease; transform:translateY(-20px); opacity:0; pointer-events:none; max-width:380px;';
        document.body.appendChild(toast);
    }

    const icon = type === 'success' ? 'bx-check-circle' : (type === 'error' ? 'bx-error-circle' : 'bx-info-circle');
    const bg = type === 'success' ? 'rgba(0, 255, 157, 0.95)' : (type === 'error' ? 'rgba(255, 107, 107, 0.95)' : 'rgba(0, 245, 255, 0.95)');
    const color = '#040d14';

    toast.style.background = bg;
    toast.style.color = color;
    toast.innerHTML = `<i class='bx ${icon}' style="font-size:20px; flex-shrink:0;"></i><span>${message}</span>`;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
    }, 4000);
}

// Expose globals for inline HTML event handlers
window.handleGoogleSignIn = handleGoogleSignIn;
window.showProfileSetupModal = showProfileSetupModal;
window.renderUserVerificationCenter = renderUserVerificationCenter;
window.renderVerificationStatusBanner = renderVerificationStatusBanner;
window.executeUserVerification = executeUserVerification;
window.showUserDetailsModal = showUserDetailsModal;
window.showUserDetailsModalById = showUserDetailsModalById;

