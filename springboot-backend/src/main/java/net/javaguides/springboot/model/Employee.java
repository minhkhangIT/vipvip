package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "fullName")
	private String fullName;

	@Column(name = "age")
	private String age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "address")
	private String address;

	@Column(name = "position")
	private String position;

	@Column(name = "moneyPerHour")
	private String moneyPerHour;

	@Column(name = "team")
	private String team;

	@Column(name = "phone")
	private String phone;

	@Column(name = "startDate")
	private String startDate;

	public Employee() {

	}

	public Employee(String fullName, String age, String sex, String address, String position, String moneyPerHour, String team, String phone, String startDay) {
		this.fullName = fullName;
		this.age = age;
		this.sex = sex;
		this.address = address;
		this.position = position;
		this.moneyPerHour = moneyPerHour;
		this.team = team;
		this.phone = phone;
		this.startDate = startDay;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getMoneyPerHour() {
		return moneyPerHour;
	}

	public void setMoneyPerHour(String moneyPerHour) {
		this.moneyPerHour = moneyPerHour;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDay) {
		this.startDate = startDay;
	}
}

