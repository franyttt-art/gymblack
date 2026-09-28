// Fotos de cada ejercicio (posición inicial y final) y variantes por si no se puede hacer.
// Fotos: free-exercise-db (github.com/yuhonas/free-exercise-db), dominio público (Unlicense).
// img = carpeta en ejercicios/ · nota = aclaración cuando la foto usa otro equipo que el de tu rutina
const MEDIA = {
  // ---------- Día 1 · Upper A ----------
  ua1:{img:"Barbell_Incline_Bench_Press_-_Medium_Grip", alt:[
    {n:"Press inclinado con mancuernas",eq:"Banco 30–45° + mancuernas",img:"Incline_Dumbbell_Press",c:1,tip:"Bajá las mancuernas a los costados del pecho alto y empujá juntándolas arriba."},
    {n:"Press inclinado en Smith",eq:"Máquina Smith + banco inclinado",img:"Smith_Machine_Incline_Bench_Press",c:1,tip:"Banco a 30–45°. La barra baja a la parte alta del pecho."},
    {n:"Press inclinado en máquina",eq:"Máquina de press inclinado",img:"Leverage_Incline_Chest_Press",c:1,tip:"Ajustá el asiento para que los agarres queden a la altura del pecho alto."}]},
  ua2:{img:"Seated_Cable_Rows", alt:[
    {n:"Remo en máquina",eq:"Máquina de remo sentado",img:"Leverage_Iso_Row",c:1,tip:"Pecho apoyado en el respaldo, tirá con los codos hacia atrás."},
    {n:"Remo con mancuerna a un brazo",eq:"Banco plano + mancuerna",img:"One-Arm_Dumbbell_Row",c:1,tip:"Rodilla y mano apoyadas en el banco. Llevá la mancuerna hacia la cadera. Series por brazo."},
    {n:"Remo con barra inclinado",eq:"Barra olímpica + discos",img:"Bent_Over_Barbell_Row",c:1,tip:"Torso inclinado ~45°, espalda recta. Llevá la barra al ombligo."}]},
  ua3:{img:"Cable_Crossover", alt:[
    {n:"Aperturas inclinadas con mancuernas",eq:"Banco inclinado + mancuernas",img:"Incline_Dumbbell_Flyes",tip:"Codos apenas flexionados, abrí hasta sentir el estiramiento del pecho."},
    {n:"Pec deck (mariposa)",eq:"Máquina pec deck",img:"Butterfly",tip:"Juntá los brazos adelante apretando el pecho, volvé lento."},
    {n:"Aperturas en banco inclinado con poleas bajas",eq:"Banco inclinado entre dos poleas bajas",img:"Incline_Cable_Flye",tip:"Mismo movimiento que con mancuernas, pero con tensión constante del cable."}]},
  ua4:{img:"Wide-Grip_Lat_Pulldown", alt:[
    {n:"Jalón agarre cerrado",eq:"Polea alta + triángulo o barra cerrada",img:"Close-Grip_Front_Lat_Pulldown",c:1,tip:"Llevá el agarre al pecho, codos hacia abajo y atrás."},
    {n:"Jalón a un brazo",eq:"Polea alta + agarre simple",img:"One_Arm_Lat_Pulldown",c:1,tip:"Tirá el codo hacia la cadera. Series por brazo."},
    {n:"Dominadas asistidas",eq:"Barra de dominadas + banda elástica (o máquina asistida)",img:"Band_Assisted_Pull-Up",c:1,tip:"Subí hasta pasar la pera por la barra, bajá lento. En vez de peso, anotá la asistencia."}]},
  ua5:{img:"Side_Lateral_Raise", nota:"En la foto es con mancuernas: en la máquina es el mismo movimiento, sentado, empujando los rodillos con los codos.", alt:[
    {n:"Elevación lateral con mancuernas",eq:"Mancuernas",img:"Side_Lateral_Raise",tip:"Subí los brazos a los costados hasta la altura del hombro, codos apenas flexionados."},
    {n:"Elevación lateral sentado",eq:"Banco + mancuernas",img:"Seated_Side_Lateral_Raise",tip:"Sentado evitás hacer trampa con el cuerpo. Subí hasta el hombro."},
    {n:"Elevación lateral con poleas",eq:"Dos poleas bajas",img:"Cable_Seated_Lateral_Raise",tip:"Cada mano agarra el cable del lado contrario. Subí hasta el hombro."}]},
  ua6:{img:"One-Arm_Side_Laterals", nota:"En la foto es con mancuerna: en tu rutina es con la polea baja, parado de costado, agarrando el cable con la mano del lado contrario.", alt:[
    {n:"Elevación lateral a un brazo con mancuerna",eq:"Mancuerna",img:"One-Arm_Side_Laterals",tip:"Agarrate de algo con la otra mano. Subí hasta el hombro. Series por brazo."},
    {n:"Elevación lateral inclinado a un brazo",eq:"Banco inclinado + mancuerna",img:"One-Arm_Incline_Lateral_Raise",tip:"Acostado de costado en el banco inclinado: más tensión abajo del recorrido."},
    {n:"Elevación lateral con banda",eq:"Banda elástica",img:"Lateral_Raise_-_With_Bands",tip:"Pisá la banda y subí los brazos a los costados."}]},
  ua7:{img:"Triceps_Pushdown_-_Rope_Attachment", alt:[
    {n:"Extensión de tríceps con barra V",eq:"Polea alta + barra V",img:"Triceps_Pushdown_-_V-Bar_Attachment",tip:"Codos pegados al cuerpo, empujá hasta estirar los brazos."},
    {n:"Extensión de tríceps con barra recta",eq:"Polea alta + barra recta",img:"Triceps_Pushdown",tip:"Codos quietos al costado, solo se mueven los antebrazos."},
    {n:"Patada de tríceps con mancuerna",eq:"Banco + mancuerna",img:"Tricep_Dumbbell_Kickback",tip:"Brazo pegado al cuerpo y paralelo al piso; estirá el codo hacia atrás."}]},
  ua8:{img:"Cable_Hammer_Curls_-_Rope_Attachment", alt:[
    {n:"Curl martillo con mancuernas",eq:"Mancuernas",img:"Hammer_Curls",tip:"Palmas enfrentadas, codos quietos al costado."},
    {n:"Curl martillo cruzado",eq:"Mancuernas",img:"Cross_Body_Hammer_Curl",tip:"Llevá la mancuerna cruzando hacia el hombro contrario."},
    {n:"Curl martillo en banco Scott",eq:"Banco Scott + mancuerna",img:"Preacher_Hammer_Dumbbell_Curl",tip:"Brazo apoyado en el banco, palma mirando hacia adentro."}]},
  // ---------- Día 2 · Lower A ----------
  la1:{img:"Barbell_Squat", alt:[
    {n:"Sentadilla en Smith",eq:"Máquina Smith",img:"Smith_Machine_Squat",c:1,tip:"Pies un poco adelante de la barra. Bajá hasta paralelo."},
    {n:"Sentadilla goblet",eq:"Mancuerna o pesa rusa",img:"Goblet_Squat",c:1,tip:"Sostené la mancuerna contra el pecho, bajá con el torso erguido."},
    {n:"Sentadilla con mancuernas",eq:"Mancuernas",img:"Dumbbell_Squat",c:1,tip:"Una mancuerna en cada mano a los costados. Bajá hasta paralelo."}]},
  la2:{img:"Leg_Press", alt:[
    {n:"Hack squat",eq:"Máquina hack squat",img:"Hack_Squat",c:1,tip:"Espalda pegada al respaldo, bajá profundo."},
    {n:"Sentadilla en Smith",eq:"Máquina Smith",img:"Smith_Machine_Squat",c:1,tip:"Pies un poco adelante de la barra. Bajá hasta paralelo."},
    {n:"Zancadas con mancuernas",eq:"Mancuernas",img:"Dumbbell_Lunges",c:1,tip:"Paso largo adelante, bajá la rodilla de atrás casi al piso. Alterná piernas."}]},
  la3:{img:"Leg_Extensions", alt:[
    {n:"Extensión de cuádriceps a una pierna",eq:"Máquina de extensiones",img:"Single-Leg_Leg_Extension",tip:"Igual que la normal, de a una pierna. Series por pierna."},
    {n:"Sentadilla goblet",eq:"Mancuerna",img:"Goblet_Squat",tip:"Torso erguido, bajá profundo para trabajar cuádriceps."},
    {n:"Subida al banco con mancuernas",eq:"Banco o cajón + mancuernas",img:"Dumbbell_Step_Ups",tip:"Subí empujando con la pierna de arriba, sin impulsarte con la de abajo."}]},
  la4:{img:"Lying_Leg_Curls", alt:[
    {n:"Curl femoral sentado",eq:"Máquina de curl femoral sentado",img:"Seated_Leg_Curl",tip:"Trabá los muslos con el rodillo y llevá los talones hacia abajo."},
    {n:"Curl femoral de pie",eq:"Máquina de curl femoral de pie",img:"Standing_Leg_Curl",tip:"De a una pierna. Llevá el talón hacia la cola."},
    {n:"Curl femoral con pelota",eq:"Pelota de pilates",img:"Ball_Leg_Curl",tip:"Acostado, cadera arriba, llevá la pelota hacia vos con los talones."}]},
  la5:{img:"Romanian_Deadlift", alt:[
    {n:"Peso muerto rumano con mancuernas",eq:"Mancuernas",img:"Stiff-Legged_Dumbbell_Deadlift",c:1,tip:"Cadera atrás, mancuernas pegadas a las piernas, espalda recta."},
    {n:"Peso muerto rumano en Smith",eq:"Máquina Smith",img:"Smith_Machine_Stiff-Legged_Deadlift",c:1,tip:"Mismo movimiento que con barra, el Smith te guía el recorrido."},
    {n:"Buenos días con barra",eq:"Barra sobre los hombros",img:"Good_Morning",c:1,tip:"Barra en la espalda, rodillas apenas flexionadas, inclinate llevando la cadera atrás. Empezá liviano."}]},
  la6:{img:"Standing_Calf_Raises", alt:[
    {n:"Pantorrilla en la prensa",eq:"Máquina leg press",img:"Calf_Press_On_The_Leg_Press_Machine",tip:"Puntas de los pies en el borde de la plataforma, empujá en puntas."},
    {n:"Pantorrilla en Smith",eq:"Máquina Smith + escalón",img:"Smith_Machine_Calf_Raise",tip:"Puntas sobre un disco o escalón para bajar más el talón."},
    {n:"Pantorrilla a una pierna con mancuerna",eq:"Escalón + mancuerna",img:"Standing_Dumbbell_Calf_Raise",tip:"Agarrate de algo, bajá el talón y subí en punta. Series por pierna."}]},
  // ---------- Día 3 · Upper B ----------
  ub1:{img:"Standing_Military_Press", alt:[
    {n:"Press de hombros con mancuernas",eq:"Banco con respaldo + mancuernas",img:"Dumbbell_Shoulder_Press",c:1,tip:"Sentado con respaldo. Empujá las mancuernas arriba sin chocarlas."},
    {n:"Press de hombros en máquina",eq:"Máquina de press de hombros",img:"Machine_Shoulder_Military_Press",c:1,tip:"Agarres a la altura de los hombros, empujá hacia arriba."},
    {n:"Press de hombros en Smith",eq:"Máquina Smith + banco",img:"Smith_Machine_Overhead_Shoulder_Press",c:1,tip:"Sentado, la barra baja hasta la altura de la pera."}]},
  ub2:{img:"Dumbbell_Incline_Row", alt:[
    {n:"Remo T acostado",eq:"Máquina de remo T con apoyo de pecho",img:"Lying_T-Bar_Row",c:1,tip:"Pecho apoyado, tirá con los codos hacia atrás."},
    {n:"Remo en máquina",eq:"Máquina de remo sentado",img:"Leverage_Iso_Row",c:1,tip:"Pecho apoyado en el respaldo, tirá con los codos hacia atrás."},
    {n:"Remo en polea baja",eq:"Polea baja + triángulo",img:"Seated_Cable_Rows",c:1,tip:"Pecho alto, tirá hacia el ombligo sin balancear el torso."}]},
  ub3:{img:"Dumbbell_Bench_Press", alt:[
    {n:"Press de banca con barra",eq:"Banco plano + barra olímpica",img:"Barbell_Bench_Press_-_Medium_Grip",c:1,tip:"Escápulas juntas, bajá la barra a la mitad del pecho."},
    {n:"Press de pecho en máquina",eq:"Máquina de press de pecho",img:"Leverage_Chest_Press",c:1,tip:"Agarres a la altura de la mitad del pecho, empujá sin trabar los codos."},
    {n:"Press de banca en Smith",eq:"Máquina Smith + banco plano",img:"Smith_Machine_Bench_Press",c:1,tip:"La barra baja a la mitad del pecho."}]},
  ub4:{img:"One-Arm_Side_Laterals", nota:"En la foto es con mancuerna: en tu rutina es con la polea baja, parado de costado, agarrando el cable con la mano del lado contrario.", alt:[
    {n:"Elevación lateral a un brazo con mancuerna",eq:"Mancuerna",img:"One-Arm_Side_Laterals",tip:"Agarrate de algo con la otra mano. Subí hasta el hombro. Series por brazo."},
    {n:"Elevación lateral con poleas",eq:"Dos poleas bajas",img:"Cable_Seated_Lateral_Raise",tip:"Cada mano agarra el cable del lado contrario. Subí hasta el hombro."},
    {n:"Elevación lateral con mancuernas",eq:"Mancuernas",img:"Side_Lateral_Raise",tip:"Subí los brazos a los costados hasta la altura del hombro."}]},
  ub5:{img:"Incline_Dumbbell_Curl", alt:[
    {n:"Curl alternado con mancuernas",eq:"Mancuernas",img:"Dumbbell_Alternate_Bicep_Curl",tip:"De pie, un brazo por vez, girando la palma hacia arriba."},
    {n:"Curl en polea baja",eq:"Polea baja + barra",img:"Standing_Biceps_Cable_Curl",tip:"Codos quietos al costado, subí la barra hasta el pecho."},
    {n:"Curl Scott en máquina",eq:"Máquina de curl Scott",img:"Machine_Preacher_Curls",tip:"Brazos apoyados en el almohadón, estirá bien abajo."}]},
  ub6:{img:"Cable_Rope_Overhead_Triceps_Extension", alt:[
    {n:"Extensión sobre la cabeza con mancuerna",eq:"Banco con respaldo + mancuerna",img:"Standing_Dumbbell_Triceps_Extension",tip:"Mancuerna con las dos manos detrás de la cabeza, codos arriba; estirá los brazos."},
    {n:"Extensión sobre la cabeza con barra",eq:"Barra EZ",img:"Standing_Overhead_Barbell_Triceps_Extension",tip:"Barra detrás de la cabeza, codos arriba y quietos."},
    {n:"Extensión de tríceps en máquina",eq:"Máquina de tríceps",img:"Machine_Triceps_Extension",tip:"Codos apoyados, estirá hasta extender del todo."}]},
  ub7:{img:"Reverse_Machine_Flyes", alt:[
    {n:"Pájaro con mancuernas",eq:"Banco + mancuernas",img:"Seated_Bent-Over_Rear_Delt_Raise",tip:"Sentado, torso inclinado adelante, abrí los brazos hacia los costados."},
    {n:"Pájaro con poleas",eq:"Dos poleas altas",img:"Cable_Rear_Delt_Fly",tip:"Cables cruzados a la altura del hombro, abrí hacia atrás."},
    {n:"Face pull",eq:"Polea alta + cuerda",img:"Face_Pull",tip:"Tirá la cuerda hacia la cara abriendo las manos a los costados."}]},
  ub8:{img:"EZ-Bar_Curl", alt:[
    {n:"Curl con barra recta",eq:"Barra recta + discos",img:"Barbell_Curl",tip:"Codos quietos, sin balancear el cuerpo."},
    {n:"Curl con mancuernas",eq:"Mancuernas",img:"Dumbbell_Bicep_Curl",tip:"Las dos a la vez, palmas hacia arriba, codos quietos."},
    {n:"Curl en polea baja",eq:"Polea baja + barra",img:"Standing_Biceps_Cable_Curl",tip:"Codos quietos al costado, subí la barra hasta el pecho."}]},
  ub9:{img:"EZ-Bar_Skullcrusher", alt:[
    {n:"Rompecráneos con mancuernas",eq:"Banco plano + mancuernas",img:"Lying_Dumbbell_Tricep_Extension",tip:"Acostado, bajá las mancuernas al costado de la cabeza con los codos al techo."},
    {n:"Extensión acostado en polea",eq:"Banco plano + polea baja + barra",img:"Cable_Lying_Triceps_Extension",tip:"Como el rompecráneos, pero con el cable: tensión todo el recorrido."},
    {n:"Press de banca agarre cerrado",eq:"Banco plano + barra",img:"Close-Grip_Barbell_Bench_Press",tip:"Manos al ancho de los hombros, codos pegados al cuerpo."}]},
  // ---------- Día 4 · Lower B ----------
  lb1:{img:"Romanian_Deadlift", alt:[
    {n:"Peso muerto rumano con mancuernas",eq:"Mancuernas",img:"Stiff-Legged_Dumbbell_Deadlift",c:1,tip:"Cadera atrás, mancuernas pegadas a las piernas, espalda recta."},
    {n:"Peso muerto rumano en Smith",eq:"Máquina Smith",img:"Smith_Machine_Stiff-Legged_Deadlift",c:1,tip:"Mismo movimiento que con barra, el Smith te guía el recorrido."},
    {n:"Buenos días con barra",eq:"Barra sobre los hombros",img:"Good_Morning",c:1,tip:"Barra en la espalda, inclinate llevando la cadera atrás. Empezá liviano."}]},
  lb2:{img:"Hack_Squat", alt:[
    {n:"Leg press 45°",eq:"Máquina leg press",img:"Leg_Press",c:1,tip:"Bajá profundo sin despegar la cola del respaldo."},
    {n:"Sentadilla en Smith",eq:"Máquina Smith",img:"Smith_Machine_Squat",c:1,tip:"Pies un poco adelante de la barra. Bajá hasta paralelo."},
    {n:"Sentadilla goblet",eq:"Mancuerna",img:"Goblet_Squat",c:1,tip:"Mancuerna contra el pecho, torso erguido, bajá profundo."}]},
  lb3:{img:"Seated_Leg_Curl", alt:[
    {n:"Curl femoral tumbado",eq:"Máquina de curl femoral acostado",img:"Lying_Leg_Curls",tip:"Cadera pegada al banco. Bajá lento."},
    {n:"Curl femoral de pie",eq:"Máquina de curl femoral de pie",img:"Standing_Leg_Curl",tip:"De a una pierna. Llevá el talón hacia la cola."},
    {n:"Curl femoral con pelota",eq:"Pelota de pilates",img:"Ball_Leg_Curl",tip:"Acostado, cadera arriba, llevá la pelota hacia vos con los talones."}]},
  lb4:{img:"Split_Squat_with_Dumbbells", alt:[
    {n:"Sentadilla búlgara en Smith",eq:"Máquina Smith + banco",img:"Smith_Single-Leg_Split_Squat",c:1,tip:"Pie de atrás en el banco, la barra del Smith te da estabilidad."},
    {n:"Zancadas con mancuernas",eq:"Mancuernas",img:"Dumbbell_Lunges",c:1,tip:"Paso largo adelante, bajá la rodilla de atrás casi al piso."},
    {n:"Subida al banco con mancuernas",eq:"Banco o cajón + mancuernas",img:"Dumbbell_Step_Ups",c:1,tip:"Subí empujando con la pierna de arriba. Series por pierna."}]},
  lb5:{img:"Barbell_Hip_Thrust", alt:[
    {n:"Puente de glúteo con barra",eq:"Barra + almohadilla (en el piso)",img:"Barbell_Glute_Bridge",c:1,tip:"Como el hip thrust pero con la espalda en el piso. Apretá glúteos arriba."},
    {n:"Puente de glúteo a una pierna",eq:"Sin equipo",img:"Single_Leg_Glute_Bridge",tip:"Una pierna arriba, empujá con el talón de la otra. Series por pierna."},
    {n:"Patada de glúteo en polea",eq:"Polea baja + tobillera",img:"One-Legged_Cable_Kickback",tip:"Llevá la pierna estirada hacia atrás apretando el glúteo."}]},
  lb6:{img:"Seated_Calf_Raise", alt:[
    {n:"Pantorrilla sentado con barra",eq:"Banco + barra sobre las rodillas + disco",img:"Barbell_Seated_Calf_Raise",tip:"Puntas sobre un disco, barra (con toalla) sobre las rodillas."},
    {n:"Pantorrilla sentado con mancuerna",eq:"Banco + mancuerna + escalón",img:"Dumbbell_Seated_One-Leg_Calf_Raise",tip:"Mancuerna sobre la rodilla, de a una pierna."},
    {n:"Pantorrilla en la prensa",eq:"Máquina leg press",img:"Calf_Press_On_The_Leg_Press_Machine",tip:"Puntas en el borde de la plataforma, empujá en puntas."}]}
};
