import React, { useEffect } from 'react'

const MuscleMapFront = ({ mapPosition }) => {

    useEffect(() => {
        let indexInArray
        if (mapPosition === 'top-left' || mapPosition === 'bottom-left') {
            indexInArray = 0
        } else if (mapPosition === 'top-middle' || mapPosition === 'bottom-middle') {
            indexInArray = 1
        } else if (mapPosition === 'top-right' || mapPosition === 'bottom-right') {
            indexInArray = 2
        }
        for (const key in muscleMapFill[indexInArray]) {
            document.querySelector('#' + key + '-' + mapPosition).style.fill = muscleMapFill[indexInArray][key]
        }
    })

    const muscleMapStyle = {
        width: 52,
        height: 102
    }

    const spanStyle = {
        margin: '0 20px 0 20px'
    }

    const muscleMapFill = [
        {
            Quads: '#25a2a2',
            Abdominals: '#131fa7',
            Chest: '#25a2a2',
        },
        {
            Quads: '#25a2a2'
        },
        {
            Front_Forearms: '#131fa7',
            Biceps: '#25a2a2',
            Front_Shoulders: '#25a2a2',
            Chest: '#131fa7',
        }
    ]

    return (
        <span style={ spanStyle } id={ mapPosition }>

            <svg style={ muscleMapStyle } className='muscle-map' id={ 'muscle-map-front-' + mapPosition } alt='An interactive map of the bodys front muscle groups' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 605.42 1177.22'>
                <g id={ 'Front_Unworkable-' + mapPosition } data-name='Front Unworkable'><path d='M300.52,3.74v0C300.65,3.73,300.52,3.74,300.52,3.74Z'/><path d='M354.33,72.84c-2.56-2.32-7.28,3.1-7.28,3.1.09-5.13.07-10.26,0-15.39-.13-8,.71-18-2.83-25.3S337.08,20.07,331,14.43c-4.06-3.74-9.24-5.81-14.5-7.21A55,55,0,0,0,301,5.68a76.9,76.9,0,0,0-15.58,2.13C271.11,11,265.33,23.35,259.6,35.25c-3.54,7.34-2.71,17.29-2.83,25.3q-.13,7.7,0,15.39s-4.72-5.42-7.27-3.1-.79,14.9,1.57,24.77,11,9.87,11,9.87c.39,12.39,3.86,17.94,3.86,17.94C273.26,135.74,301,136,301,136h1.72s27.78-.26,35.12-10.58c0,0,3.47-5.55,3.87-17.94,0,0,8.65,0,11-9.87S356.88,75.16,354.33,72.84Z'/><path d='M266.52,129.35s-1.36,21.88-1,26.91,22.26,53.61,24.77,54.58-5.61-46.84-7.54-50.71S275.23,130.9,266.52,129.35Z'/><path d='M274.65,134l17.61,5.23-2.9,37.35S278.38,135.76,274.65,134Z'/><path d='M199.46,270.26s-5.91,76.84,6.48,97.35c0,0,3.09-2.95,1-45.8S199.46,270.26,199.46,270.26Z'/><path d='M52.07,538.9l-4,7.14a12.91,12.91,0,0,1-7,6c-6.71,2.37-15.56,3.9-20.64,8.65C16.84,564-.19,585.55,0,587.68s-.19,6.58,3.87,6.77,12.78-6.19,14.52-9.68,5-7.55,5.42-5-7.16,26.13-7.16,26.13S1.94,633,2.52,636.64s2.32,4.84,5.22,4.26,9.87-12.19,9.87-12.19,12.26-22.37,13.81-22c2.71.64-3.55,14.84-3.55,14.84s-9.67,32.32-9.67,34.84,4.25,5.42,7.83,2.32,17.76-43.14,18.68-43.87c3.23-2.58,3.49.71,1.94,7.67s-9.1,38.91-4.84,42.2,7.74-1,10.26-12.2,5.34-41.32,11.22-37.29c2.26,1.55.3,10.18,2.61,33.13.68,6.78,8.81,9,8.81-3.77,0-6.05-.23-20.32-.09-28.54A32.28,32.28,0,0,1,77,604.55c3.52-8.7,9.93-25.26,9.36-29.07-.77-5.22,1.36-21.48,1.36-21.48s-13.14-15.66-34-17.85Z'/><path d='M252.32,459.1s37.68-3.62,43.36,0,4.06,138.58,4.06,138.58-5.35,15.22-14.13-1S249.74,487,252.32,459.1Z'/><path d='M211,304.9s21.94,19,33.42,18.45c0,0-4.9,4.39-10.32,4.78s-19.77-3.26-23.87-10.84C210.26,317.29,207.16,308.9,211,304.9Z'/><path d='M209.87,321.81s-3.09,21,5.68,27.61,20.64,13.16,24.64,11.22,5.42-20.38,0-24.12S214,329.18,209.87,321.81Z'/><path d='M210.65,348.26s-2.46,17.59,4.38,23.89S236.32,391.87,241.1,389s4.64-20.9.9-23.22S220.58,358.06,210.65,348.26Z'/><path d='M210.78,376.9s-2.46,29.42,28.51,43.23c0,0,8.9-11.87,3.87-20.9S210.78,373.58,210.78,376.9Z'/><path d='M214,403.35s-1.93,24,2.71,28.52,20,15.87,24,14.71-.9-23.23-.9-23.23S217.49,411.61,214,403.35Z'/><path d='M213.6,433.71s-5.46,16.1-5.95,28.74-.49,27.61-2,31.48,39.14,44.13,39.14,44.13,6.78-55.31-.05-68.17S223.91,437.23,213.6,433.71Z'/><path d='M203.81,501.93,184.07,608.77s25.84-62.62,26.66-77.95,0-21.14,0-21.14l-5.16-7.75Z'/><path d='M258.78,806.58l-16.6,52.64s24.72-35.61,18.53-52.64S258.78,806.58,258.78,806.58Z'/><path d='M175.94,1069.8l-4.15,12a11.45,11.45,0,0,0-1.47,7.55c.78,4.07,1.47,15.29,1.47,15.29v6l-10.95,22.26s-14.71,13.16-15.1,20.71a32.36,32.36,0,0,0,2.33,13.55l5,1s0,3.48,1.55,3.48h6.17l2.34,3.48s3.68.78,5.62-1.54,3.09,1.67,3.09,1.67l4.07,2,2.71-1.35,3.29-4.45,3.67,3.09,4.84,2.71h3.49l4.45-1.54,3.1-3.68,5.22-6.39,4.26-5.81s1.16-7.35,0-12.58-3.48-8.32-2.13-10.84,4.88-3.67,4.76-16.25.47-16.84,2-19.94a19.29,19.29,0,0,0,1.94-11.42c-.58-4.64-8.32-22.26-7.74-26.9s-1.55-66.58-1.55-66.58S176.46,1068.3,175.94,1069.8Z'/><path d='M300.64,3.78v0S300.51,3.73,300.64,3.78Z'/><path d='M338.9,129.58s1.35,21.87,1,26.9-22.26,53.62-24.78,54.58,5.62-46.83,7.55-50.7S330.19,131.13,338.9,129.58Z'/><path d='M330.77,134.23l-17.61,5.22,2.9,37.36S327,136,330.77,134.23Z'/><path d='M406,270.48s5.91,76.84-6.48,97.36c0,0-3.1-2.95-1-45.8S406,270.48,406,270.48Z'/><path d='M553.35,539.13l3.95,7.14a13,13,0,0,0,7,6c6.72,2.37,15.57,3.9,20.64,8.65,3.61,3.38,20.65,24.9,20.46,27s.19,6.58-3.88,6.78S588.77,588.48,587,585s-5-7.55-5.42-5,7.16,26.13,7.16,26.13,14.71,27.09,14.13,30.77-2.32,4.84-5.23,4.26-9.87-12.2-9.87-12.2-12.25-22.36-13.8-22c-2.71.65,3.54,14.84,3.54,14.84s9.68,32.33,9.68,34.84-4.25,5.42-7.84,2.32-17.75-43.13-18.67-43.87c-3.23-2.58-3.49.71-1.94,7.68s9.1,38.9,4.84,42.19-7.74-1-10.26-12.19-5.35-41.32-11.22-37.29c-2.26,1.55-.3,10.17-2.61,33.12-.69,6.78-8.81,9-8.81-3.76,0-6,.23-20.33.08-28.55a32.15,32.15,0,0,0-2.34-11.49c-3.51-8.7-9.92-25.25-9.36-29.06.78-5.23-1.35-21.48-1.35-21.48s13.14-15.66,34-17.85Z'/><path d='M353.09,459.32s-37.67-3.61-43.35,0-4.07,138.58-4.07,138.58,5.36,15.23,14.13-1S355.67,487.19,353.09,459.32Z'/><path d='M394.38,305.13s-21.93,19-33.42,18.45c0,0,4.91,4.39,10.33,4.77s19.77-3.26,23.87-10.83C395.16,317.52,398.25,309.13,394.38,305.13Z'/><path d='M395.54,322s3.1,21-5.67,27.61-20.65,13.16-24.65,11.22-5.42-20.39,0-24.13S391.42,329.4,395.54,322Z'/><path d='M394.77,348.48s2.45,17.6-4.39,23.9-21.29,19.72-26.06,16.88-4.65-20.91-.9-23.23S384.84,358.29,394.77,348.48Z'/><path d='M394.64,377.13s2.45,29.42-28.51,43.22c0,0-8.91-11.87-3.88-20.9S394.64,373.81,394.64,377.13Z'/><path d='M391.42,403.58s1.93,24-2.71,28.52-20,15.87-24,14.71.9-23.23.9-23.23S387.93,411.84,391.42,403.58Z'/><path d='M391.82,433.94s5.46,16.09,5.95,28.74.48,27.61,2,31.48-39.13,44.13-39.13,44.13-6.79-55.31,0-68.17S381.51,437.46,391.82,433.94Z'/><path d='M401.61,502.16,421.35,609s-25.84-62.62-26.66-78,0-21.15,0-21.15l5.16-7.74Z'/><path d='M346.64,806.81l16.59,52.64s-24.72-35.61-18.52-52.64S346.64,806.81,346.64,806.81Z'/><path d='M429.48,1070l4.15,12a11.39,11.39,0,0,1,1.46,7.55c-.77,4.06-1.46,15.29-1.46,15.29v6l10.95,22.26s14.71,13.16,15.09,20.71a32.26,32.26,0,0,1-2.32,13.55l-5,1s0,3.49-1.55,3.49H444.6l-2.35,3.48s-3.67.78-5.61-1.55-3.1,1.67-3.1,1.67l-4.06,2-2.71-1.35-3.29-4.46-3.67,3.1-4.85,2.71h-3.48L407,1175.9l-3.1-3.68-5.22-6.38-4.26-5.81s-1.16-7.35,0-12.58,3.48-8.32,2.13-10.84-4.88-3.68-4.76-16.26-.47-16.84-2-19.93a19.31,19.31,0,0,1-1.93-11.42c.58-4.65,8.32-22.26,7.74-26.9s1.55-66.59,1.55-66.59S429,1068.52,429.48,1070Z'/></g>
                <g id={ 'Front_Calves-' + mapPosition } data-name='Front Calves'><path d='M203,825.93s-22.84,41.81-23.22,58.46,15.48,137.8,15.48,137.8L203,987.35Z'/><path d='M241,876.64s-20.43,29.81-22.41,56.52-5,109.93-5,109.93,15-58.83,21.18-78.19S244.07,885.93,241,876.64Z'/><path d='M168.19,899.87l7.75-17V996.26S165.1,953.68,168.19,899.87Z'/><polygon points='179.8 1055.48 179.8 942.84 179.8 926.97 191.42 1018.32 179.8 1055.48'/><path d='M402.38,826.16s22.84,41.81,23.23,58.45-15.48,137.81-15.48,137.81l-7.75-34.84Z'/><path d='M364.45,876.87s20.43,29.81,22.41,56.52,5,109.93,5,109.93-15-58.84-21.18-78.19S361.35,886.16,364.45,876.87Z'/><path d='M437.22,900.1l-7.74-17V996.48S440.32,953.9,437.22,900.1Z'/><polygon points='425.62 1055.71 425.62 943.06 425.62 927.19 414 1018.55 425.62 1055.71'/></g>
                <g id={ 'Quads-' + mapPosition } data-name='Front Quads'><path d='M213.6,509.68l13.88,87.87s34,101.8,36.33,124.64,3.87,39.49,3.87,39.49,7.35-24,5.8-37.17-19.74-112.25-33.67-142.06S213.6,509.68,213.6,509.68Z'/><polygon points='221.81 516.45 236.32 566.77 236.32 533.29 221.81 516.45'/><path d='M238.45,537v35.8l3.87,12.58s8.52-16.84,8.13-24.19a85,85,0,0,1,0-11.42Z'/><polygon points='252.15 552.45 252.15 568.13 243.65 587.48 248.71 602 263.81 567.74 252.15 552.45'/><path d='M263.81,573.16l-14.13,31,19.74,81.27s10.84-26.52,10.45-37.36S267.48,574.51,263.81,573.16Z'/><path d='M276.05,603.16s14.27,14.52,16.79,14.9-.58,72-15.29,107.62l-1.5,3.87-1-11.62S293.72,647.87,276.05,603.16Z'/><path d='M270.58,687.93S281,664.51,281,655.22c0,0-3.63,48.39-7.33,56.33C273.7,711.55,273.31,696.89,270.58,687.93Z'/><path d='M213.6,538.06s-15.6,54.84-18.31,73S191.42,661,193,674.58s19,72.39,19,72.39,3.51,21.67,14.72,22.45,17-45.68,17-45.68,2.68-49.55,0-60.77S207.29,563.69,213.6,538.06Z'/><path d='M249.68,678.45l16.84,94.84s-1.58,26.32-12.79,29.81-15.28-25.55-15.28-25.55S256.65,712.21,249.68,678.45Z'/><path d='M184.07,623.87l13.51-36s-11.19,42.19-8.87,70.06,12.39,65,12.39,65,18.42,49.16,12.5,64.64a116.36,116.36,0,0,1-14.18,26.32s-2.81-38.71-7.14-53.42S177.49,647.1,184.07,623.87Z'/><path d='M391.82,509.9l-13.89,87.87s-34,101.81-36.32,124.65-3.87,39.48-3.87,39.48-7.36-24-5.81-37.16,19.74-112.26,33.68-142.06S391.82,509.9,391.82,509.9Z'/><polygon points='383.61 516.68 369.09 567 369.09 533.52 383.61 516.68'/><path d='M367,537.19V573l-3.87,12.58s-8.51-16.84-8.13-24.19A84.16,84.16,0,0,0,355,550Z'/><polygon points='353.27 552.68 353.27 568.35 361.77 587.71 356.71 602.23 341.61 567.97 353.27 552.68'/><path d='M341.61,573.39l14.13,31L336,685.64s-10.84-26.51-10.46-37.35S337.93,574.74,341.61,573.39Z'/><path d='M329.36,603.39s-14.27,14.51-16.78,14.9.58,72,15.29,107.61l1.49,3.87,1-11.61S311.7,648.1,329.36,603.39Z'/><path d='M334.84,688.16s-10.46-23.42-10.46-32.71c0,0,3.64,48.39,7.34,56.32C331.72,711.77,332.11,697.11,334.84,688.16Z'/><path d='M391.82,538.29s15.6,54.84,18.31,73,3.87,49.94,2.32,63.49-19,72.38-19,72.38-3.51,21.68-14.72,22.45-17-45.67-17-45.67-2.68-49.55,0-60.78S398.13,563.92,391.82,538.29Z'/><path d='M355.74,678.68,338.9,773.52s1.58,26.32,12.79,29.8S367,777.77,367,777.77,348.77,712.44,355.74,678.68Z'/><path d='M421.35,624.1l-13.51-36s11.19,42.19,8.87,70.06-12.39,65-12.39,65-18.43,49.16-12.5,64.65A116.64,116.64,0,0,0,406,814.16s2.8-38.71,7.14-53.42S427.93,647.32,421.35,624.1Z'/></g>
                <g id={ 'Abdominals-' + mapPosition } data-name='Front Abdominals'><path d='M295.68,319.23s5.68,28.64,3.61,32.25-44.64,29.94-47.74,29.16-6.71-43.1,0-51.09S295.68,319.23,295.68,319.23Z'/><path d='M295.68,359.23s3.48-.13,4.64,1.67,1,39.49-2.32,45c0,0-1.16,1.55-15.1,2.33s-30.58,3.48-31.87,6.84c0,0-2.06-25.94,0-28.65S294.78,359.87,295.68,359.23Z'/><path d='M252.19,450.32s-3.48-7-3.09-13.29S247,420.13,255,416.39s37.42-6.2,40-5.17,8.13,12.39,5.29,31.75S253.36,457,252.19,450.32Z'/><path d='M309.74,319.45s-5.68,28.65-3.61,32.26,44.64,29.93,47.74,29.16,6.71-43.1,0-51.1S309.74,319.45,309.74,319.45Z'/><path d='M309.74,359.45s-3.49-.13-4.65,1.68-1,39.48,2.33,45c0,0,1.16,1.55,15.09,2.32s30.58,3.49,31.87,6.84c0,0,2.07-25.93,0-28.64S310.64,360.1,309.74,359.45Z'/><path d='M353.22,450.55s3.49-7,3.1-13.29,2.06-16.91-5.94-20.65-37.42-6.19-40-5.16-8.13,12.39-5.29,31.74S352.06,457.26,353.22,450.55Z'/></g>
                <g id={ 'Front_Forearms-' + mapPosition } data-name='Front Forearms'><path d='M126.58,376.13s4.45,31.87,2.52,39S71.42,533.29,71.42,533.29,102,410.19,108.19,399.93,126.58,376.13,126.58,376.13Z'/><path d='M85.74,470.19s4.83-47.42,14.76-60.58l3.44-3.48Z'/><path d='M54.58,532.13l28.84-58.84S71.23,530.58,66,535.22l-11.42-1.16Z'/><path d='M77.87,535.22s40.26-90.77,46.2-101.51,21.42-30.61,27.61-29.07,9.53,8.78,2.31,16.78S77.87,535.22,77.87,535.22Z'/><path d='M82,536.52s76.06-119,79.45-119.75,3.91,5.42,1.33,10.84-16,28.39-17.29,32-27.1,40.78-31,44.65S82,538.06,82,538.06'/><polygon points='80.71 545.8 87.94 550.45 101.61 522.84 80.71 545.8'/><path d='M478.83,376.35s-4.45,31.88-2.51,39S534,533.52,534,533.52s-30.58-123.1-36.78-133.36S478.83,376.35,478.83,376.35Z'/><path d='M519.67,470.42s-4.83-47.43-14.76-60.58l-3.43-3.49Z'/><path d='M550.83,532.35,522,473.52s12.19,57.29,17.42,61.93l11.41-1.16Z'/><path d='M527.54,535.45s-40.25-90.77-46.19-101.51-21.42-30.62-27.61-29.07-9.54,8.77-2.32,16.77S527.54,535.45,527.54,535.45Z'/><path d='M523.42,536.74S447.36,417.77,444,417s-3.91,5.42-1.33,10.84,16,28.39,17.29,32,27.1,40.77,31,44.64,32.52,33.81,32.52,33.81'/><polygon points='524.71 546.03 517.48 550.68 503.8 523.06 524.71 546.03'/></g>
                <g id={ 'Biceps-' + mapPosition } data-name='Front Biceps'><path d='M132,399.93s-2.13-33.29,3.1-55.16,10.26-32.71,10.26-32.71S161.61,303,167.42,296s30.63-30.77,30.63-30.77-6.38,24.25-7.63,45a74,74,0,0,1-12.33,36.45C163.69,368.36,141.15,399.93,132,399.93Z'/><path d='M170,393s-2.58-18.84,0-25.42,21.94-34.19,23.23-54.32c0,0,5.67,22.73,0,36.65S170.26,389.68,170,393Z'/><path d='M163.55,373.61s-11.42,11.74-9.29,19.42,9.29,18,9.29,18,6-10.28,5.3-14.93-5.49-19.16-4-22.45S163.55,373.61,163.55,373.61Z'/><path d='M473.42,400.16s2.12-33.29-3.1-55.16-10.26-32.71-10.26-32.71-16.26-9.1-22.06-16.06-30.63-30.78-30.63-30.78,6.38,24.26,7.62,45a74.08,74.08,0,0,0,12.34,36.45C441.73,368.58,464.26,400.16,473.42,400.16Z'/><path d='M435.42,393.26s2.58-18.84,0-25.42-21.94-34.19-23.23-54.32c0,0-5.68,22.72,0,36.65S435.16,389.9,435.42,393.26Z'/><path d='M441.87,373.84s11.42,11.74,9.29,19.42-9.29,17.95-9.29,17.95-6-10.27-5.31-14.92,5.49-19.16,4.05-22.45S441.87,373.84,441.87,373.84Z'/></g>
                <g id={ 'Front_Shoulders-' + mapPosition } data-name='Front Shoulders'><path d='M146.9,307.42s-6.77-42.39-1.54-56.9,24.38-49.75,52.25-51.49a47,47,0,0,1,23,5.81c11.22,6.39,17.8,6,17.8,6s-36.57,16.83-39,27.67-.49,15.29-1.85,19.16S159.87,305.68,146.9,307.42Z'/><path d='M458.51,307.65s6.78-42.39,1.55-56.91S435.67,201,407.8,199.26a47,47,0,0,0-23,5.8c-11.23,6.39-17.81,6-17.81,6s36.58,16.82,39,27.66.49,15.29,1.84,19.16S445.54,305.9,458.51,307.65Z'/></g>
                <g id={ 'Chest-' + mapPosition } data-name='Front Chest'><path d='M258,207.23s19.68,1,25.45,10.83,12.23,30.71,12.23,44.39v53.68s-34.32,5.93-42.58,5.68-38.2-4.65-43.61-28.39-13.68-43.1-8.26-51.87S244.07,206.45,258,207.23Z'/><path d='M347.42,207.45s-19.68,1-25.46,10.84S309.74,249,309.74,262.68v53.67s34.32,5.94,42.58,5.68,38.19-4.64,43.61-28.38,13.68-43.1,8.26-51.88S361.35,206.68,347.42,207.45Z'/></g>
                <g id={ 'Front_Traps-' + mapPosition } data-name='Front Traps'><path d='M265.48,165.94,263,203.29l16.45.77S269.67,167.48,265.48,165.94Z'/><path d='M220.65,199.42l42.38-31s-3.48,32.13-7.93,34.26S220.65,199.42,220.65,199.42Z'/><path d='M339.94,166.16l2.44,37.36-16.45.77S335.75,167.71,339.94,166.16Z'/><path d='M384.77,199.65l-42.39-31s3.49,32.13,7.94,34.26S384.77,199.65,384.77,199.65Z'/></g></svg>

        </span>
    )
}

const MuscleMapBack = ({ mapPosition }) => {

    useEffect(() => {
        let indexInArray
        if (mapPosition === 'top-left' || mapPosition === 'bottom-left') {
            indexInArray = 0
        } else if (mapPosition === 'top-right' || mapPosition === 'bottom-right') {
            indexInArray = 1
        }
        for (const key in muscleMapFill[indexInArray]) {
            document.querySelector('#' + key + '-' + mapPosition).style.fill = muscleMapFill[indexInArray][key]
        }
    })

    const muscleMapStyle = {
        width: 52,
        height: 102
    }

    const muscleMapFill = [
        {
            Traps_mid: '#25a2a2',
            Hamstrings: '#25a2a2'
        },
        {
            Lats: '#25a2a2'
        }
    ]

    return (
        <span id={ mapPosition }>

            <svg style={muscleMapStyle} className='muscle-map' id={ 'muscle-map-back-' + mapPosition } alt='An interactive map of the bodys back muscle groups' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 586.94 1180.65'>
                <g id={ 'Back_Unworkable-' + mapPosition } data-name='Back Unworkable'><path d='M257.72,140.13A90.16,90.16,0,0,0,267.27,97C266.49,72.26,292,76.39,292,76.39V0S276.3.26,270.62,4.65,252,16.77,249.46,32.26s-2.58,34.84-2.58,34.84-2.84-6.2-5.16-6.2-4.65,1-4.65,4.13,2.33,21.68,4.13,25.55,4.39,8.26,8.52,9.81,3.1,4.64,3.1,4.64-.26,10.32.25,15.23S257.72,140.13,257.72,140.13Z'/><path d='M183.4,224.26s18.32-9.81,20.9-13.94,18.06-9.8,20.64-9,8,8,11.1,34.32a170.38,170.38,0,0,0,13.68,48.26s-43.1-15.48-48.52-28.39S187.78,224.52,183.4,224.26Z'/><path d='M174.62,233.55s-1-9.29,2.58-10.84,19.87,28.64,19.87,28.64Z'/><path d='M177.2,241.29l3.36,42.58s43.09,10.58,61.68,0C242.24,283.87,184.69,256.52,177.2,241.29Z'/><path d='M31.07,546.32s7.88,8.07,12.46,9.81,19.16,5.8,22.32,5.42v21.67l-5.16,26.13S56,621.16,56,623.68s1.55,35.22.39,36.77-2.71,5-5.42,3.29-5.23-34.64-5.23-34.64-1-5.62-2.25-4.26S36.11,669,36.11,669s-.78,5.22-5,4.84-2.71-17.23-2.71-17.23,3.68-32.13,2.13-32.71-2.4,4.06-2.4,4.06S22.17,668,16.75,668.19,10,668,11,656.77s4.25-35,4.25-35-6,23.61-7.74,24.77-6.19,4.84-7.35.78S7.65,602,7.65,602s-3.09,2.32-4.25,0-.39-7.55,1-8.52,4.26-10.84,3.88-14.32,3.48-9.48,7.54-12S27.78,550.26,31.07,546.32Z'/><path d='M201.2,403.61s2.13,25.74,0,31.74-6.38,31.55-5.61,40.26c0,0,14.13-30.19,20.71-32.71,0,0,3.1-2.71,4.45-2.13S201.2,403.61,201.2,403.61Z'/><path d='M195.5,488.58s5.64-29,25.31-46.26c0,0,14.46,16.65,8.26,33.29C229.07,475.61,204.5,476.77,195.5,488.58Z'/><path d='M133.69,1095.74s-6.55,16.26-6.29,21.68,0,14.19,0,14.19-3.61-.52-5.15,2.32-3.88,14.45-1.55,19.62,2.58,5.42,3.61,10.32,1.29,11.35,5.16,13.42,27.61,7.48,36.13-2.32,2.58-17.55,3.87-21.42,8.56-6.19,9.57-15.36-.28-6.06-3.12-14.32,6.24-4.65,3.12-12.13-7.17-19.1-7.17-19.1-13.9,52.65-22.16,56.26S133.69,1095.74,133.69,1095.74Z'/><path d='M325.93,140.13A90.16,90.16,0,0,1,316.38,97c.78-24.77-24.77-20.64-24.77-20.64V0S307.35.26,313,4.65s18.58,12.12,21.16,27.61,2.58,34.84,2.58,34.84,2.84-6.2,5.16-6.2,4.64,1,4.64,4.13-2.32,21.68-4.12,25.55-4.39,8.26-8.52,9.81-3.1,4.64-3.1,4.64.26,10.32-.25,15.23S325.93,140.13,325.93,140.13Z'/><path d='M400.25,224.26s-18.32-9.81-20.9-13.94-18.07-9.8-20.65-9-8,8-11.09,34.32a170.38,170.38,0,0,1-13.68,48.26s43.1-15.48,48.52-28.39S395.87,224.52,400.25,224.26Z'/><path d='M409,233.55s1-9.29-2.58-10.84-19.88,28.64-19.88,28.64Z'/><path d='M406.45,241.29l-3.36,42.58s-43.1,10.58-61.68,0C341.41,283.87,399,256.52,406.45,241.29Z'/><path d='M555.86,546.32s-7.87,8.07-12.45,9.81-19.16,5.8-22.32,5.42v21.67l5.16,26.13s4.65,11.81,4.65,14.33-1.55,35.22-.39,36.77,2.71,5,5.42,3.29,5.23-34.64,5.23-34.64,1-5.62,2.25-4.26S550.83,669,550.83,669s.78,5.22,5,4.84,2.71-17.23,2.71-17.23-3.67-32.13-2.12-32.71,2.4,4.06,2.4,4.06,5.92,40.07,11.34,40.26S577,668,576,656.77s-4.25-35-4.25-35,6,23.61,7.74,24.77,6.19,4.84,7.35.78S579.28,602,579.28,602s3.1,2.32,4.26,0,.39-7.55-1-8.52-4.25-10.84-3.87-14.32-3.48-9.48-7.54-12S559.16,550.26,555.86,546.32Z'/><path d='M382.45,403.61s-2.13,25.74,0,31.74,6.38,31.55,5.61,40.26c0,0-14.13-30.19-20.71-32.71,0,0-3.1-2.71-4.45-2.13S382.45,403.61,382.45,403.61Z'/><path d='M388.15,488.58s-5.64-29-25.32-46.26c0,0-14.45,16.65-8.26,33.29C354.57,475.61,379.15,476.77,388.15,488.58Z'/><path d='M450,1095.74s6.56,16.26,6.3,21.68,0,14.19,0,14.19,3.61-.52,5.15,2.32,3.87,14.45,1.55,19.62-2.58,5.42-3.61,10.32-1.29,11.35-5.16,13.42-27.62,7.48-36.13-2.32-2.58-17.55-3.87-21.42-8.56-6.19-9.57-15.36.28-6.06,3.12-14.32-6.24-4.65-3.12-12.13,7.17-19.1,7.17-19.1,13.9,52.65,22.16,56.26S450,1095.74,450,1095.74Z'/></g>
                <g id={ 'Back_Forearms-' + mapPosition } data-name='Back Forearms'><path d='M99,375.48s-2.32,12.65,0,17.81,12.13,19.61,11.1,27.87S99.53,444.9,99.53,444.9s-9-48.77-6.71-55.48A113.22,113.22,0,0,1,99,375.48Z'/><path d='M77.85,403.61s12.9-6.71,17.55-25.29C95.4,378.32,79.14,394.58,77.85,403.61Z'/><path d='M43.53,521.29s22.19-87.74,26.83-97.55,17.81-24.26,17.81-24.26S57.72,511.74,43.53,521.29Z'/><path d='M49.72,536.26S73.2,456,75.78,451.35s13.94-43.09,13.94-43.09,5.17,32,2.71,47.74S49.72,536.26,49.72,536.26Z'/><path d='M58.75,532.39l58.84-105,26.32-27.87a49.46,49.46,0,0,1-4.2,27.36C133.07,440.77,90.24,512,90.24,512L68.3,546.32l14.45-35.87'/><path d='M484.64,375.48s2.32,12.65,0,17.81-12.13,19.61-11.1,27.87,10.58,23.74,10.58,23.74,9-48.77,6.71-55.48A113.22,113.22,0,0,0,484.64,375.48Z'/><path d='M505.8,403.61s-12.9-6.71-17.55-25.29C488.25,378.32,504.51,394.58,505.8,403.61Z'/><path d='M540.12,521.29s-22.19-87.74-26.84-97.55-17.8-24.26-17.8-24.26S525.93,511.74,540.12,521.29Z'/><path d='M533.93,536.26S510.45,456,507.86,451.35s-13.93-43.09-13.93-43.09-5.17,32-2.72,47.74S533.93,536.26,533.93,536.26Z'/><path d='M524.9,532.39l-58.84-105-26.32-27.87a49.46,49.46,0,0,0,4.2,27.36c6.63,13.93,49.47,85.16,49.47,85.16l21.94,34.32L500.9,510.45'/></g>
                <g id={ 'Triceps-' + mapPosition } data-name='Back Triceps'><path d='M174.49,249.29s-45.6,41.55-50.35,51.1-14.55,49.54-14.55,49.54l-7.74,19.36s-1.55,20.39,5.16,25.55,19.87-55.23,23.74-52.65-9.8,53-9.8,53-4.44,3,3.19,5.11,21.32-5.16,21.32-5.16l10.84-30.46s18.84-30.45,20.9-37.93S174.49,249.29,174.49,249.29Z'/><path d='M409.16,249.29s45.6,41.55,50.34,51.1,14.56,49.54,14.56,49.54l7.74,19.36s1.55,20.39-5.16,25.55-19.87-55.23-23.74-52.65,9.8,53,9.8,53,4.44,3-3.2,5.11-21.31-5.16-21.31-5.16l-10.84-30.46s-18.84-30.45-20.9-37.93S409.16,249.29,409.16,249.29Z'/></g>
                <g id={ 'Back_Calves-' + mapPosition } data-name='Back Calves'><path d='M187.75,820.9s-14.22,23.23-20.9,29.42-41.13,93.29-31.45,127.36c0,0,7.74,11.61,23.61-4.26s23.23-73.94,23.23-73.94S197.91,834.45,187.75,820.9Z'/><path d='M196.56,1001.29s-13.74-1.16-19.26-17-8.81-24.39,0-48.78,13.87-76.64,13.87-76.64l12-22.84S214,870.06,219.4,879a39.81,39.81,0,0,0-6.58,22.37C212.82,915,217.07,990.06,196.56,1001.29Z'/><path d='M395.9,820.9s14.21,23.23,20.9,29.42,41.13,93.29,31.45,127.36c0,0-7.74,11.61-23.61-4.26s-23.23-73.94-23.23-73.94S385.74,834.45,395.9,820.9Z'/><path d='M387.09,1001.29s13.74-1.16,19.26-17,8.8-24.39,0-48.78-13.87-76.64-13.87-76.64l-12-22.84s-10.84,34.06-16.26,43a39.81,39.81,0,0,1,6.58,22.37C370.83,915,366.57,990.06,387.09,1001.29Z'/><path d='M133.69,985.42s23.38,113.8,11.77,142.45c0,0-3.87-96-8.9-106.84S133.69,985.42,133.69,985.42Z'/><path d='M162.43,1107.74s9.35-50.32,12.84-60,20.36-39.1,20.36-39.1-23.31,49.94-23.77,65.42S162.43,1107.74,162.43,1107.74Z'/><path d='M450,985.42s-23.38,113.8-11.76,142.45c0,0,3.87-96,8.9-106.84S450,985.42,450,985.42Z'/><path d='M421.21,1107.74s-9.34-50.32-12.83-60-20.36-39.1-20.36-39.1,23.3,49.94,23.77,65.42S421.21,1107.74,421.21,1107.74Z'/></g>
                <g id={ 'Hamstrings-' + mapPosition } data-name='Back Hamstrings'><path d='M184.43,577.29S156.56,685.16,171,751.74c0,0,18.19-50.45,16.64-87.23S184.43,577.29,184.43,577.29Z'/><path d='M203.14,654.06l27.48,5s-14.32,49.93-19,85.16-30.37,89.42-44.8,99.48c0,0,5.71-44.52,5.71-56.9s.38-29.81.38-29.81S201.59,674.58,203.14,654.06Z'/><path d='M244.94,660.26s6.59,61.16-12,111.09-16.25,91.75-16.25,91.75S198.88,824,207,785.29s13.16-71.61,13.16-71.61,10.12-48.92,14.32-53.42Z'/><path d='M248.43,660.26s26.71-5,36.77-22.45c0,0,3.49,36.38-11.22,72.38s-27.9,79-27.9,79S256.17,671.1,248.43,660.26Z'/><path d='M246.08,720.64s-2.3,31.75-7.33,43.75-17.81,47.22-16.64,66.19,3.37,36.77,3.37,36.77a375.28,375.28,0,0,0,8.57-42.19C237.2,802.71,250.69,731.87,246.08,720.64Z'/><path d='M247,791.1s-6.34,10.45-7.89,20.51-2.32,32.9-6.58,43C232.56,854.58,245.81,821.66,247,791.1Z'/><path d='M399.22,577.29s27.87,107.87,13.42,174.45c0,0-18.19-50.45-16.65-87.23S399.22,577.29,399.22,577.29Z'/><path d='M380.51,654.06l-27.48,5s14.32,49.93,19,85.16,30.38,89.42,44.81,99.48c0,0-5.71-44.52-5.71-56.9S410.7,757,410.7,757,382.06,674.58,380.51,654.06Z'/><path d='M338.7,660.26s-6.58,61.16,12,111.09S367,863.1,367,863.1s17.81-39.1,9.68-77.81-13.16-71.61-13.16-71.61-10.12-48.92-14.32-53.42Z'/><path d='M335.22,660.26s-26.71-5-36.77-22.45c0,0-3.49,36.38,11.22,72.38s27.9,79,27.9,79S327.48,671.1,335.22,660.26Z'/><path d='M337.57,720.64s2.3,31.75,7.33,43.75,17.8,47.22,16.64,66.19-3.37,36.77-3.37,36.77a376.57,376.57,0,0,1-8.58-42.19C346.45,802.71,333,731.87,337.57,720.64Z'/><path d='M336.62,791.1s6.34,10.45,7.89,20.51,2.32,32.9,6.58,43C351.09,854.58,337.84,821.66,336.62,791.1Z'/></g>
                <g id={ 'Glutes-' + mapPosition } data-name='Back Glutes'><path d='M258.07,494.45s24.48,9.55,30.23,51.87-3.5,79.49-3.5,79.49-16,29.67-38,30.19-45.46-7-45.46-7-16.48-41.55-8-90.32,15.24-60.92,15.24-60.92,2.49-8.37,1.5-9.21,14.48-2.9,23-1.87S256.58,491.86,258.07,494.45Z'/><path d='M325.13,494.45s-24.64,9.55-30.42,51.87,3.52,79.49,3.52,79.49,16.09,29.67,38.22,30.19,45.76-7,45.76-7,16.59-41.55,8-90.32-15.33-60.92-15.33-60.92-2.52-8.37-1.51-9.21-14.59-2.9-23.13-1.87S326.64,491.86,325.13,494.45Z'/></g>
                <g id={ 'Back_Shoulders-' + mapPosition } data-name='Back Shoulders'><path d='M126.11,290.58s39-34.84,43.61-55,11.1-14.45,11.1-14.45,9.54-2.32,20.38-12.9,20.39-9,20.39-9-15-16.26-36.13-13.42-40,14.45-47,28.9-11.61,23.48-13.67,39S126.11,290.58,126.11,290.58Z'/><path d='M457.54,290.58s-39-34.84-43.61-55-11.1-14.45-11.1-14.45-9.55-2.32-20.38-12.9-20.39-9-20.39-9,15-16.26,36.13-13.42,40,14.45,47,28.9,11.61,23.48,13.67,39S457.54,290.58,457.54,290.58Z'/></g>
                <g id={ 'Traps_mid-' + mapPosition } data-name='Back Traps (mid-back)'><path d='M233.17,165.66c-15.47,8.37-32,15.5-32,15.5,14.2-3.87,38.2,29.68,39,44.13s4.39,21.94,11.87,57.81,34.58,77.42,34.58,77.42,0-127.74-1.17-204.83Z'/><path d='M350.48,165.66c15.46,8.37,32,15.5,32,15.5-14.2-3.87-38.2,29.68-39,44.13s-4.39,21.94-11.87,57.81S297,360.52,297,360.52s0-127.74,1.17-204.83Z'/><path className='cls-1' d='M253,404.9c-1.18,10.58-13.48,47.93-19.33,65.3a31.74,31.74,0,0,1-1.91,7.35c1,0,2,.06,3,.12,4.58-14.79,19.21-62.15,20.08-67.48,1-6.32,7.74-16.38,7.74-16.38L286,368.45c-.11-3.47-.19-5.48-.19-5.48S254.56,391,253,404.9Z'/></g>
                <g id={ 'Lower_Back-' + mapPosition } data-name='Back Lower Back'><path d='M254.82,410.19c-.87,5.33-15.5,52.69-20.08,67.48,34.58,2,48.07,24.88,45.43,19.23s-5-6.58,1.94-28.26c5.89-18.32,4.45-81.2,3.86-100.19l-23.41,25.36S255.85,403.87,254.82,410.19Z'/><path d='M328.83,410.19c.87,5.33,15.5,52.69,20.08,67.48-34.58,2-48.07,24.88-45.43,19.23s5-6.58-1.94-28.26c-5.89-18.32-4.45-81.2-3.86-100.19l23.4,25.36S327.79,403.87,328.83,410.19Z'/></g>
                <g id={ 'Lats-' + mapPosition } data-name='Back Lats'><path d='M285.78,363c-15.09-13.36-35-74.52-36.06-76.26s-4.78,0-4.78,0c-12.38,9.48-64.64,0-64.64,0-1.94,32.9,20.9,106.84,20.9,106.84s14.71,35.61,26.33,51.35c6.83,9.26,6.39,16.84,5.45,23.23,5.86-17.38,17.67-52.84,20-63.23C256.13,391.23,285.78,363,285.78,363Z'/><path d='M297.87,363c15.09-13.36,35-74.52,36.06-76.26s4.77,0,4.77,0c12.39,9.48,64.65,0,64.65,0,1.93,32.9-20.9,106.84-20.9,106.84s-14.71,35.61-26.33,51.35c-6.83,9.26-6.39,16.84-5.45,23.23-5.86-17.38-17.67-52.84-20-63.23C327.52,391.23,297.87,363,297.87,363Z'/></g>
                <g id={ 'Back_Traps-' + mapPosition } data-name='Back Traps'><path d='M283.27,98.58c-3.36-4.13-13.42,0-13.42,0,1.7,9.67-5.68,35.87-10.58,47.74-1.6,3.87-8.34,8.93-16.69,14l42.78-10.69C284.87,120.37,284.2,99.73,283.27,98.58Z'/><path d='M300.38,98.58c3.36-4.13,13.42,0,13.42,0-1.7,9.67,5.68,35.87,10.58,47.74,1.6,3.87,8.34,8.93,16.69,14l-42.78-10.69C298.78,120.37,299.45,99.73,300.38,98.58Z'/></g></svg>

        </span>
    )
}

export { MuscleMapFront, MuscleMapBack }