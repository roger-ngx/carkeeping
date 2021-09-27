import React from 'react';

import Specification from './Specification';

export default {
    title: 'Specification',
    component: Specification
};

const Template = args => (<Specification {...args} />);

export const Employer1 = Template.bind();
Employer1.args = {
    title: '​찾지말고 부르세요',
    content: '필요한 날짜와 시간, 서빙, 주방, 단순노무,\n사무, 행사판촉 알바를 선택해보세요. 쑨에\n서 경력과 업무스킬을 보유한 알바를 보내\n드릴게요.',
    imgSrc: '/img/employer/img_employer_job_registration.png',
    imgAlign: 'right',
    backgroundColor: '#f2f1ff',
    titleColor: '#333',
    contentColor: '#757575'
};

export const Employer2 = Template.bind();
Employer2.args = {
    title: '​경력있고 성실한 알바만\n배정해 드릴게요',
    content: '알바님 경력, 업무스킬, 리뷰 등을 검토하\n여 가장 적합한 근무자를 쑨이 배정해 드립\n니다.',
    imgSrc: '/img/employer/img_employer_job_registration.png',
    imgAlign: 'right',
    backgroundColor: 'white',
    titleColor: '#333',
    contentColor: '#757575'
};

export const Employer3 = Template.bind();
Employer3.args = {
    title: '​배정된 알바 프로필을\n확인해보세요',
    content: '알바님의 경력 횟수, 리뷰 평점, 나와 비슷한\n사장님이 남긴 리뷰, 업무스킬 확인하세요.\n문자와 전화연결도 가능합니다.',
    imgSrc: '/img/employer/img_employer_job_registration.png',
    imgAlign: 'left',
    backgroundColor: '#7568dc',
    titleColor: '#fff',
    contentColor: '#fff'
};

export const Employer4 = Template.bind();
Employer4.args = {
    title: '​카드등록으로 간편하게\n급여이체하세요',
    content: '알바님의 경력 횟수, 리뷰 평점, 나와 비슷한 사장님\n이 남긴 리뷰, 업무스킬 확인하세요.\n문자와 전화연결도 가능합니다.',
    imgSrc: '/img/employer/img_employer_job_registration.png',
    imgAlign: 'right',
    backgroundColor: '#fff',
    titleColor: '#333',
    contentColor: '#757575'
};

export const Employee1 = Template.bind();
Employee1.args = {
    title: '​시급 1만원 보장\n단기알바에 지원하세요',
    content: '능력있는 알바님인가요? 시급 1만원 급여\n로 짧게 일하고 많이 벌어보세요.',
    imgSrc: '/img/employee/img_employee_job_view.png',
    imgAlign: 'right',
    backgroundColor: '#fff',
    titleColor: '#333',
    contentColor: '#757575'
};

export const Employee2 = Template.bind();
Employee2.args = {
    title: '뽀너~쑨 일자리에\n배정되고 추가급여를\n받아보세요',
    content: '기존 급여에서 추가지급되는 쑨 만의 특별\n한 알바입니다. 뽀너-쑨이 보이면 빠르게\n지원해보세요.',
    imgSrc: '/img/employee/img_employee_bonus_soon.png',
    imgAlign: 'left',
    backgroundColor: '#fff',
    titleColor: '#333',
    contentColor: '#757575'
};

export const Employee3 = Template.bind();
Employee3.args = {
    title: '추천, 리뷰가 많을수록\n일자리 배정에 유리해요',
    content: '쑨 이외의 알바매칭 어플에서 받은 사장님\n리뷰나 추천이 있다면 보내주세요.\n경력으로 인정해드립니다.',
    imgSrc: '/img/employee/img_employee_profile.png',
    imgAlign: 'right',
    backgroundColor: '#fff',
    titleColor: '#333',
    contentColor: '#757575'
};