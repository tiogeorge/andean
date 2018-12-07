import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Direccion } from '../pago/direccion';
import { DireccionService } from '../pago/direccion.service';
import { NgForm } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Provincia } from './provincia';
import { Region } from './region';
import { RegionService } from './region.service';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class PerfilUsuarioComponent implements OnInit {
  direccionService  : DireccionService;
  regionService     : RegionService;
  usuarioService    : UsuarioService;
  router            : Router;
  tiposDocumento    : string[];
  tiposVivienda     : string[] = [ 'Casa', 'Oficina', 'Departamento', 'Edificio', 'Condominio', 'Otro'];

  constructor(usuarioService: UsuarioService, direccionService: DireccionService, regionService: RegionService,router: Router , private adapter: DateAdapter<any>) {
    this.usuarioService   = usuarioService;
    this.direccionService = direccionService;
    this.regionService    = regionService;
    this.router           = router;
    this.tiposDocumento   = ['DNI'];
    this.adapter.setLocale('es');
  }

  ngOnInit() {
    this.usuarioService.getUsuarioLogeado(localStorage.getItem("_tk")).subscribe(res =>{
      var jres = JSON.parse(JSON.stringify(res));
      if(jres.status){      
        this.usuarioService.usuarioSeleccionado = jres.data;
        this.getDirecciones(jres.data._id);
      }else{
        this.router.navigate(['/']);
      }
    });
  }

  actualizar(){
    this.usuarioService.putUsuario(this.usuarioService.usuarioSeleccionado).subscribe(res =>{
      var jres = JSON.parse(JSON.stringify(res));
      if(jres.status){

      }else {

      }
    });
  }

  agregarDireccion(direccion: Direccion){
    if(direccion._id){
      this.direccionService.actualizarDireccion(direccion).subscribe(res =>{
        var jres = JSON.parse(JSON.stringify(res));
        if (jres.status){
          console.log(jres.msg);
        }else {
          console.log(jres.error);
        }
      })
    } else {
      this.direccionService.AgregarDireccion(direccion).subscribe(res => {
        var jres = JSON.parse(JSON.stringify(res));
        if( jres.status) {
          console.log(jres.msg);
        }else{
          console.log(jres.error);
        }
      })
    }
  }

  departamentoSelected(departamento: string){
    var i : number = 0;
    while(this.regionService.regiones[i].departamento != departamento){
      i++;
    }
    this.regionService.departamentoSelected = this.regionService.regiones[i];
    this.regionService.provinciaSelected = new Provincia("",[]);
  }

  getDirecciones(_id: string){
    this.direccionService.ListarDireccion(_id).subscribe( res =>{
      this.direccionService.direccion = res as Direccion[];
      this.getRegiones();
      console.log(this.direccionService.direccion);
    })
  }

  getRegiones(){
    this.regionService.getRegiones().subscribe(res => {
      this.regionService.regiones = res as Region[];
    })
  }

  nuevadireccion(form?: NgForm){
    this.direccionService.selecDireccion.usuario = this.usuarioService.usuarioSeleccionado._id;
    this.agregarDireccion(this.direccionService.selecDireccion);
    form.reset();
  }

  provinciaSelected(provincia: string){
    var i : number = 0;
    while(this.regionService.departamentoSelected.provincias[i].provincia != provincia){
      i++;
    }
    this.regionService.provinciaSelected = this.regionService.departamentoSelected.provincias[i];
  }

}
