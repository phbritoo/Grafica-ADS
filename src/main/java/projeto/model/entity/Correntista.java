package projeto.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

//@Entity
public class Correntista {
	
//	@Id
//	@Column(name="CPF", length=14)
//	private String aCPF;
//	
//	@Column(name="Nome")
//	private String aNome;
//	
//	@Column(name="Data_Nascimento")
//	@Temporal(TemporalType.DATE)
//	private Date aDataNascimento;
//	
//	@Column(name="Data_Cadastro")
//	@Temporal(TemporalType.TIMESTAMP)
//	private Date aDataCadstro;
//	
//	//Metodo da classe Entidade - Defini quem sera a chave primaria da classe
//	public Object getPK() {
//		return getCPF();
//	}
//	
//	public String getCPF() {
//		return aCPF;
//	}
//
//	public void setCPF(String aCPF) {
//		this.aCPF = aCPF;
//	}
//
//	public String getNome() {
//		return aNome;
//	}
//
//	public void setNome(String aNome) {
//		this.aNome = aNome;
//	}
//
//	public Date getDataNascimento() {
//		return aDataNascimento;
//	}
//
//	public void setDataNascimento(Date aDataNascimento) {
//		this.aDataNascimento = aDataNascimento;
//	}
//
//	public Date getDataCadstro() {
//		return aDataCadstro;
//	}
//
//	public void setDataCadstro(Date aDataCadstro) {
//		this.aDataCadstro = aDataCadstro;
//	}
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((aCPF == null) ? 0 : aCPF.hashCode());
//		result = prime * result + ((aDataCadstro == null) ? 0 : aDataCadstro.hashCode());
//		result = prime * result + ((aDataNascimento == null) ? 0 : aDataNascimento.hashCode());
//		result = prime * result + ((aNome == null) ? 0 : aNome.hashCode());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Correntista other = (Correntista) obj;
//		if (aCPF == null) {
//			if (other.aCPF != null)
//				return false;
//		} else if (!aCPF.equals(other.aCPF))
//			return false;
//		if (aDataCadstro == null) {
//			if (other.aDataCadstro != null)
//				return false;
//		} else if (!aDataCadstro.equals(other.aDataCadstro))
//			return false;
//		if (aDataNascimento == null) {
//			if (other.aDataNascimento != null)
//				return false;
//		} else if (!aDataNascimento.equals(other.aDataNascimento))
//			return false;
//		if (aNome == null) {
//			if (other.aNome != null)
//				return false;
//		} else if (!aNome.equals(other.aNome))
//			return false;
//		return true;
//	}
	
	
	
}