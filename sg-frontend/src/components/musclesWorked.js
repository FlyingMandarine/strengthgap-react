export const allMuscles = [
    'Front_Calves', 'Front_Forearms', 'Front_Shoulders', 'Front_Traps',
    'Abdominals', 'Biceps', 'Chest', 'Quads',

    'Back_Calves', 'Back_Forearms', 'Back_Shoulders', 'Back_Traps',
    'Glutes', 'Hamstrings', 'Lats', 'Lower_Back', 'Traps_mid', 'Triceps'
]

export const musclesWorked = {
    'Ab Wheel Rollout': ['Abdominals'],
    'Arnold Press': ['Front_Shoulders', 'Back_Shoulders'],
    'Back Extension': ['Lower_Back'],
    'Behind The Back Barbell Shrug': ['Front_Shoulders', 'Back_Shoulders'],
    'Behind The Back Cable Curl': ['Biceps'],
}

const miteux = { allMuscles, musclesWorked }

export default miteux