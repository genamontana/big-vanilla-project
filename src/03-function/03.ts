import {student, StudentType} from '../02-object/02';
import {GovernmentBuildingType, HouseType} from '../02-object/02_02';

export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string)=>{
    return s.address.city.title === cityName;

}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number)=>{
    building.budget += budget
}

export const repairHouse = (house: HouseType)=>{
    house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingType, staff: number)=>{
    governmentBuilding.staffCount -= staff
}

export const toHireStaff = (governmentBuildingType: GovernmentBuildingType, number: number)=>{
    governmentBuildingType.staffCount += number
}