import { Pacientes, pacientes, NumeroPacientesPorEspecialidad } from "./model";

// Apartado 1
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pediatryPatients: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pediatryPatients.push(pacientes[i]);
    }
  }
  return pediatryPatients;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pediatryPatients: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pediatryPatients.push(pacientes[i]);
    }
  }
  return pediatryPatients;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].temperatura > 39 &&
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
    }
  }
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let newPatients: Pacientes[] = structuredClone(pacientes);
  for (let i = 0; i < newPatients.length; i++) {
    if (newPatients[i].especialidad === "Pediatra") {
      newPatients[i].especialidad = "Medico de familia";
    }
  }
  return newPatients;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatryPatients: boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i].especialidad);
    if (pacientes[i].especialidad === "Pediatra") {
      pediatryPatients = true;
      break;
    }
  }
  return pediatryPatients;
};

console.log(HayPacientesDePediatria(pacientes));

// Apartado 5
const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia: number = 0;
  let pediatria: number = 0;
  let cardiologia: number = 0;
  let i: number = 0;
  while (i < pacientes.length) {
    switch (pacientes[i].especialidad) {
        case "Medico de familia":
            medicoDeFamilia++;
            break;
        case "Pediatra":
            pediatria++;
            break;
        case "Cardiólogo":
            cardiologia++;
            break;
    }
    i++;
  }
  return { medicoDeFamilia, pediatria, cardiologia };
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
