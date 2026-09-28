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
    {n:"Pantorrilla en la prensa",eq:"Máquina leg press",img:"Calf_Press_On_The_Leg_Press_Machine",tip:"Puntas en el borde de la plataforma, empujá en puntas."}]},
  // ================= RUTINA EN CASA (solo con el propio cuerpo) =================
  // nota = aclaración cuando la foto usa algún elemento que en casa no hace falta
  // ---------- Día 1 · Upper A en casa ----------
  ca1:{img:"Push-Ups_With_Feet_Elevated", alt:[
    {n:"Flexiones",eq:"Piso",img:"Pushups",c:1,tip:"Manos un poco más abiertas que los hombros, cuerpo recto. Bajá el pecho hasta casi tocar el piso."},
    {n:"Flexiones inclinadas (manos en la silla)",eq:"Silla firme contra la pared",img:"Incline_Push-Up",c:1,tip:"Manos en el asiento de la silla: es más fácil. Cuerpo recto de la cabeza a los talones."},
    {n:"Flexiones con rodillas apoyadas",eq:"Piso",img:"Incline_Push-Up_Medium",c:1,tip:"Rodillas en el piso y cuerpo recto de las rodillas a la cabeza. Bajá el pecho entre las manos."}]},
  ca2:{img:"Inverted_Row", nota:"En la foto es una barra: en casa usá el borde de una mesa firme.", alt:[
    {n:"Remo invertido con rodillas dobladas",eq:"Mesa firme",img:"Inverted_Row",c:1,tip:"Igual que el remo bajo la mesa pero con las rodillas dobladas y los pies cerca: es más fácil."},
    {n:"Remo con toalla en la puerta",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",c:1,tip:"Puerta bien cerrada, agarrá la toalla con las dos manos, inclinate hacia atrás y tirá los codos hacia atrás."},
    {n:"Superman con tirón",eq:"Piso",img:"Superman",tip:"Boca abajo, brazos estirados adelante. Levantá pecho y brazos y tirá los codos hacia las costillas."}]},
  ca3:{img:"Push-Up_Wide", alt:[
    {n:"Flexiones inclinadas abiertas",eq:"Silla firme contra la pared",img:"Incline_Push-Up_Wide",c:1,tip:"Manos bien abiertas sobre la silla: es más fácil. Pausa de 2 s abajo."},
    {n:"Flexiones con rodillas abiertas",eq:"Piso",img:"Incline_Push-Up_Wide",tip:"Rodillas apoyadas y manos bien abiertas. Pausa de 2 s abajo."},
    {n:"Aprieto isométrico de pecho",eq:"Nada",img:"Isometric_Chest_Squeezes",tip:"Palmas juntas frente al pecho, apretá fuerte 20–30 s. Contá cada 5 s como una rep."}]},
  ca4:{img:"Superman", alt:[
    {n:"Remo bajo la mesa",eq:"Mesa firme",img:"Inverted_Row",c:1,tip:"Acostado bajo la mesa, llevá el pecho al borde con el cuerpo recto."},
    {n:"Remo con toalla en la puerta",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",c:1,tip:"Inclinate hacia atrás y tirá los codos hacia atrás apretando la espalda."},
    {n:"Hiperextensión en el piso",eq:"Piso",img:"Superman",tip:"Boca abajo, manos detrás de la cabeza. Levantá el pecho 2 s y bajá lento."}]},
  ca5:{img:"Handstand_Push-Ups", nota:"La foto muestra la versión más difícil (contra la pared). Arrancá con los pies en el piso y la cadera bien arriba, en forma de V invertida.", alt:[
    {n:"Flexiones pike con rodillas",eq:"Piso",img:"Handstand_Push-Ups",c:1,tip:"Igual, con las rodillas apoyadas y la cadera arriba: es más fácil."},
    {n:"Flexiones pike con pies en la silla",eq:"Silla firme",img:"Handstand_Push-Ups",c:1,tip:"Más difícil: pies en la silla, cadera arriba, bajá la cabeza entre las manos."},
    {n:"Flexiones inclinadas",eq:"Silla firme contra la pared",img:"Incline_Push-Up",c:1,tip:"Si todavía no te salen las pike: manos en la silla y cuerpo recto."}]},
  ca6:{img:"Lying_Rear_Delt_Raise", nota:"La foto usa mancuernas y un banco: en casa hacelo boca abajo en el piso, sin peso.", alt:[
    {n:"Elevaciones en T boca abajo",eq:"Piso",img:"Lying_Rear_Delt_Raise",tip:"Brazos abiertos en cruz, pulgares arriba. Subí los brazos 2 s apretando atrás."},
    {n:"Elevación lateral isométrica contra la pared",eq:"Pared",img:"Shoulder_Raise",tip:"De costado a la pared, empujá la pared con el dorso de la mano 20–30 s. Cada 5 s es una rep."},
    {n:"Plancha lateral con brazo arriba",eq:"Piso",img:"Side_Bridge",tip:"En plancha de costado, subí y bajá el brazo de arriba bien lento."}]},
  ca7:{img:"Bench_Dips", nota:"En la foto es un banco: en casa usá una silla firme apoyada contra la pared.", alt:[
    {n:"Fondos en silla con rodillas dobladas",eq:"Silla firme contra la pared",img:"Bench_Dips",tip:"Pies cerca de la silla y rodillas dobladas: es más fácil."},
    {n:"Flexiones diamante",eq:"Piso",img:"Push-Ups_-_Close_Triceps_Position",tip:"Manos juntas debajo del pecho, codos pegados al cuerpo."},
    {n:"Extensión de tríceps en la mesa",eq:"Borde de la mesada o una mesa firme",img:"Body_Tricep_Press",tip:"Manos en el borde, cuerpo inclinado y recto. Doblá solo los codos y volvé a estirar."}]},
  ca8:{img:"Inverted_Row", nota:"Palmas mirando hacia vos. En la foto es una barra: en casa, el borde de una mesa firme.", alt:[
    {n:"Remo supino con rodillas dobladas",eq:"Mesa firme",img:"Inverted_Row",tip:"Palmas hacia vos y rodillas dobladas: es más fácil."},
    {n:"Curl con toalla (contra el pie)",eq:"Toalla",img:"Standing_Towel_Triceps_Extension",tip:"Pisá la toalla con un pie y tirá hacia arriba como en un curl, haciendo fuerza con la pierna en contra."},
    {n:"Remo con toalla en la puerta, palmas arriba",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",tip:"Palmas mirando hacia arriba y codos pegados al cuerpo para que trabaje el bíceps."}]},
  // ---------- Día 2 · Lower A en casa ----------
  cl1:{img:"Split_Squat_with_Dumbbells", nota:"La foto usa mancuernas y el pie de atrás en el piso: vos sin peso y con el pie de atrás sobre la silla.", alt:[
    {n:"Estocada fija (pie de atrás en el piso)",eq:"Piso",img:"Split_Squat_with_Dumbbells",c:1,tip:"Igual, con el pie de atrás en el piso: es más fácil. Bajá la rodilla de atrás casi al piso."},
    {n:"Sentadilla",eq:"Piso",img:"Bodyweight_Squat",c:1,tip:"Pies al ancho de hombros, bajá sacando la cola atrás con el pecho arriba."},
    {n:"Estocadas saltando",eq:"Piso",img:"Split_Squats",c:1,tip:"Más difícil: saltá cambiando de pierna en el aire y caé suave."}]},
  cl2:{img:"Bodyweight_Squat", alt:[
    {n:"Sentadilla a la silla",eq:"Silla",img:"Sit_Squats",c:1,tip:"Bajá hasta rozar la silla con la cola y volvé a subir: es más fácil."},
    {n:"Sentadilla con salto",eq:"Piso",img:"Freehand_Jump_Squat",c:1,tip:"Más difícil: subí saltando y caé suave, doblando las rodillas."},
    {n:"Sentadilla sumo con pausa",eq:"Piso",img:"Bodyweight_Squat",c:1,tip:"Pies bien abiertos y puntas afuera. Pausa de 2 s abajo."}]},
  cl3:{img:"Bodyweight_Walking_Lunge", alt:[
    {n:"Estocada hacia atrás",eq:"Piso",img:"Crossover_Reverse_Lunge",tip:"Dá el paso hacia atrás: cuida más las rodillas."},
    {n:"Subidas a la silla",eq:"Silla firme o un escalón",img:"Step-up_with_Knee_Raise",tip:"Subí empujando con la pierna de arriba, sin impulsarte con la de abajo."},
    {n:"Sentadilla a la silla",eq:"Silla",img:"Sit_Squats",tip:"Si las estocadas te molestan: bajá hasta la silla y volvé a subir."}]},
  cl4:{img:"Ball_Leg_Curl", nota:"La foto usa una pelota: vos apoyá los talones sobre una toalla en un piso liso (o con medias) y deslizá.", alt:[
    {n:"Curl con toalla a una pierna",eq:"Piso liso + toalla",img:"Ball_Leg_Curl",tip:"Más difícil: con una sola pierna, la otra en el aire."},
    {n:"Puente de glúteo con talones lejos",eq:"Piso",img:"Butt_Lift_Bridge",tip:"Talones bien lejos de la cola: trabaja más la parte de atrás del muslo."},
    {n:"Nórdico asistido",eq:"Pies trabados bajo el sillón o la cama",img:"Floor_Glute-Ham_Raise",tip:"Bajá lo más lento que puedas con el cuerpo recto y frená con las manos."}]},
  cl5:{img:"Kettlebell_One-Legged_Deadlift", nota:"La foto usa una pesa: en casa hacelo igual, sin peso.", alt:[
    {n:"Peso muerto a una pierna apoyado en la pared",eq:"Pared",img:"Kettlebell_One-Legged_Deadlift",c:1,tip:"Una mano en la pared para el equilibrio: es más fácil."},
    {n:"Buenos días",eq:"Piso",img:"Hyperextensions_With_No_Hyperextension_Bench",c:1,tip:"Manos detrás de la cabeza, rodillas apenas dobladas, bajá el torso llevando la cadera atrás."},
    {n:"Puente de glúteo a una pierna",eq:"Piso",img:"Single_Leg_Glute_Bridge",c:1,tip:"Acostado, un pie en el piso y la otra pierna arriba. Subí la cadera apretando el glúteo."}]},
  cl6:{img:"Standing_Dumbbell_Calf_Raise", nota:"La foto usa mancuernas: vos a una pierna, sin peso, con el talón colgando del escalón.", alt:[
    {n:"Pantorrilla con las dos piernas en el escalón",eq:"Un escalón + la pared",img:"Standing_Dumbbell_Calf_Raise",tip:"Con las dos piernas: es más fácil."},
    {n:"Pantorrilla en el piso a una pierna",eq:"Piso + la pared",img:"Calf_Raises_-_With_Bands",tip:"Sin escalón: subí en puntas de a una pierna."},
    {n:"Saltos en puntas",eq:"Piso",img:"Fast_Skipping",tip:"Saltitos rápidos y chicos en puntas de pie."}]},
  // ---------- Día 3 · Upper B en casa ----------
  cu1:{img:"Handstand_Push-Ups", nota:"La foto muestra la versión contra la pared. La de tu rutina: pies en la silla, cadera arriba y la cabeza baja entre las manos.", alt:[
    {n:"Flexiones pike (pies en el piso)",eq:"Piso",img:"Handstand_Push-Ups",c:1,tip:"Cadera bien arriba en V invertida: es más fácil."},
    {n:"Flexiones en parada de manos contra la pared",eq:"Pared",img:"Handstand_Push-Ups",c:1,tip:"Solo si ya sos avanzado: de manos contra la pared, bajá la cabeza al piso con control."},
    {n:"Flexiones con pies elevados",eq:"Pies sobre una silla",img:"Push-Ups_With_Feet_Elevated",c:1,tip:"Si la pike te cuesta demasiado: flexiones con los pies en la silla."}]},
  cu2:{img:"Inverted_Row", nota:"En la foto es una barra: en casa, el borde de una mesa firme.", alt:[
    {n:"Remo invertido con rodillas dobladas",eq:"Mesa firme",img:"Inverted_Row",c:1,tip:"Rodillas dobladas y pies cerca: es más fácil."},
    {n:"Remo con toalla en la puerta",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",c:1,tip:"Inclinate hacia atrás y tirá los codos hacia atrás."},
    {n:"Remo con toalla a un brazo",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",c:1,tip:"Más difícil: de a un brazo. Series con uno y después con el otro."}]},
  cu3:{img:"Pushups", alt:[
    {n:"Flexiones inclinadas",eq:"Silla firme contra la pared",img:"Incline_Push-Up",c:1,tip:"Manos en la silla: es más fácil."},
    {n:"Flexiones con rodillas apoyadas",eq:"Piso",img:"Incline_Push-Up_Medium",c:1,tip:"Rodillas apoyadas, cuerpo recto de las rodillas a la cabeza."},
    {n:"Flexiones con pies elevados",eq:"Pies sobre una silla",img:"Push-Ups_With_Feet_Elevated",c:1,tip:"Más difícil: pies en la silla."}]},
  cu4:{img:"Lying_Rear_Delt_Raise", nota:"La foto usa mancuernas y un banco: en casa, boca abajo en el piso y sin peso.", alt:[
    {n:"Elevaciones en Y boca abajo",eq:"Piso",img:"Lying_Rear_Delt_Raise",tip:"Brazos en forma de Y, pulgares arriba. Subí 2 s y bajá lento."},
    {n:"Superman con tirón",eq:"Piso",img:"Superman",tip:"Levantá pecho y brazos y tirá los codos hacia atrás apretando la espalda alta."},
    {n:"Remo con toalla en la puerta, codos abiertos",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",tip:"Codos bien abiertos, a la altura de los hombros: trabaja la parte de atrás del hombro."}]},
  cu5:{img:"Inverted_Row", nota:"Palmas mirando hacia vos. En la foto es una barra: en casa, el borde de una mesa firme.", alt:[
    {n:"Remo supino con rodillas dobladas",eq:"Mesa firme",img:"Inverted_Row",tip:"Palmas hacia vos y rodillas dobladas: es más fácil."},
    {n:"Curl con toalla (contra el pie)",eq:"Toalla",img:"Standing_Towel_Triceps_Extension",tip:"Pisá la toalla con un pie y tirá hacia arriba como en un curl, con la pierna haciendo fuerza en contra."},
    {n:"Remo con toalla en la puerta, palmas arriba",eq:"Toalla atada al picaporte de una puerta cerrada",img:"Inverted_Row_with_Straps",tip:"Palmas hacia arriba y codos pegados al cuerpo."}]},
  cu6:{img:"Body_Tricep_Press", nota:"En la foto es una barra: en casa usá el borde de la mesada o de una mesa firme.", alt:[
    {n:"Extensión de tríceps en la pared",eq:"Pared",img:"Body_Tricep_Press",tip:"Antebrazos en la pared, cuerpo inclinado: es más fácil. Empujá estirando los codos."},
    {n:"Fondos en silla",eq:"Silla firme contra la pared",img:"Bench_Dips",tip:"Bajá doblando los codos hacia atrás y empujá hasta estirar."},
    {n:"Extensión con toalla por detrás",eq:"Toalla",img:"Standing_Towel_Triceps_Extension",tip:"Una mano arriba y otra abajo en la espalda: la de abajo hace fuerza en contra mientras la de arriba estira."}]},
  cu7:{img:"Push-Ups_-_Close_Triceps_Position", alt:[
    {n:"Flexiones cerradas con rodillas",eq:"Piso",img:"Incline_Push-Up_Close-Grip",tip:"Manos juntas y rodillas apoyadas: es más fácil."},
    {n:"Flexiones cerradas inclinadas",eq:"Silla firme contra la pared",img:"Incline_Push-Up_Close-Grip",tip:"Manos juntas sobre la silla."},
    {n:"Fondos en silla",eq:"Silla firme contra la pared",img:"Bench_Dips",tip:"Codos hacia atrás, bajá hasta 90° y empujá."}]},
  // ---------- Día 4 · Lower B en casa ----------
  cb1:{img:"Single_Leg_Glute_Bridge", nota:"En la foto es en el piso: con la espalda alta apoyada en el sillón tenés más recorrido.", alt:[
    {n:"Puente de glúteo a una pierna en el piso",eq:"Piso",img:"Single_Leg_Glute_Bridge",c:1,tip:"En el piso: es más fácil."},
    {n:"Puente de glúteo con las dos piernas",eq:"Espalda alta en el sillón",img:"Butt_Lift_Bridge",c:1,tip:"Con las dos piernas: es más fácil. Pausa de 2 s arriba."},
    {n:"Patada de glúteo en cuatro patas",eq:"Piso",img:"Glute_Kickback",tip:"En cuatro patas, llevá la pierna doblada hacia el techo apretando el glúteo."}]},
  cb2:{img:"Floor_Glute-Ham_Raise", alt:[
    {n:"Nórdico con recorrido corto",eq:"Pies trabados bajo el sillón",img:"Floor_Glute-Ham_Raise",c:1,tip:"Bajá solo hasta donde puedas controlar y volvé empujándote con las manos."},
    {n:"Curl con toalla deslizando",eq:"Piso liso + toalla",img:"Ball_Leg_Curl",c:1,tip:"Cadera arriba, llevá los talones hacia la cola y volvé lento."},
    {n:"Peso muerto a una pierna",eq:"Piso",img:"Kettlebell_One-Legged_Deadlift",c:1,tip:"Sin peso: bajá el torso con la espalda recta y la pierna de atrás estirada."}]},
  cb3:{img:"Step-up_with_Knee_Raise", nota:"Usá una silla firme contra la pared o un escalón alto.", alt:[
    {n:"Subidas a un escalón bajo",eq:"Escalón",img:"Step-up_with_Knee_Raise",c:1,tip:"Escalón más bajo: es más fácil."},
    {n:"Sentadilla búlgara",eq:"Pie de atrás sobre una silla",img:"Split_Squat_with_Dumbbells",c:1,tip:"Pie de atrás en la silla, bajá la rodilla de atrás casi al piso."},
    {n:"Estocada hacia atrás",eq:"Piso",img:"Crossover_Reverse_Lunge",c:1,tip:"Paso hacia atrás, bajá y volvé empujando con la pierna de adelante."}]},
  cb4:{img:"Ball_Leg_Curl", nota:"La foto usa una pelota: vos con los talones sobre una toalla en un piso liso.", alt:[
    {n:"Curl con toalla a una pierna",eq:"Piso liso + toalla",img:"Ball_Leg_Curl",tip:"Más difícil: una sola pierna."},
    {n:"Puente de glúteo con talones lejos",eq:"Piso",img:"Butt_Lift_Bridge",tip:"Talones lejos de la cola para que trabaje la parte de atrás del muslo."},
    {n:"Patada de glúteo en cuatro patas",eq:"Piso",img:"Glute_Kickback",tip:"Llevá la pierna hacia el techo apretando el glúteo."}]},
  cb5:{img:"Superman", alt:[
    {n:"Hiperextensión en el piso",eq:"Piso",img:"Superman",tip:"Manos detrás de la cabeza: levantá el pecho 2 s y bajá lento."},
    {n:"Buenos días",eq:"Piso",img:"Hyperextensions_With_No_Hyperextension_Bench",tip:"Manos detrás de la cabeza, bajá el torso llevando la cadera atrás."},
    {n:"Puente de glúteo",eq:"Piso",img:"Butt_Lift_Bridge",tip:"Subí la cadera apretando el glúteo, pausa de 2 s."}]},
  cb6:{img:"Standing_Dumbbell_Calf_Raise", nota:"La foto usa mancuernas: vos a una pierna, sin peso, con el talón colgando del escalón.", alt:[
    {n:"Pantorrilla con las dos piernas en el escalón",eq:"Un escalón + la pared",img:"Standing_Dumbbell_Calf_Raise",tip:"Con las dos piernas: es más fácil."},
    {n:"Pantorrilla en el piso a una pierna",eq:"Piso + la pared",img:"Calf_Raises_-_With_Bands",tip:"Sin escalón: subí en puntas de a una pierna."},
    {n:"Saltos en puntas",eq:"Piso",img:"Fast_Skipping",tip:"Saltitos rápidos y chicos en puntas de pie."}]}
};
