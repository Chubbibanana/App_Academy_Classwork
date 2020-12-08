require 'byebug'
class Employee
    attr_reader :name, :title, :salary, :boss, :employees
    def initialize(name, salary, title, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @@employees = []
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end
end

class Manager < Employee
    attr_reader :employees
    def initialize(name, salary, title, boss)
        super
        @employees = []
    end

    def add_employee(employee)
        @employees << employee
        @employees.concat(employee.employees) if employee.employees       
    end

    def bonus(multiplier)
        sum = @employees.inject(0) {|acc, employee| acc + employee.salary }
        return sum * multiplier
    end
end

Ned = Manager.new('Ned', 1000000, 'Founder', nil)
Darren = Manager.new('Darren', 78000, 'TA Manager', 'Ned')
Shawna = Employee.new('Shawna', 12000, 'TA', 'Darren')
David = Employee.new('David', 10000, 'TA', 'Darren')
Darren.add_employee(Shawna)
Darren.add_employee(David)
Ned.add_employee(Darren)

p Ned.bonus(5)
p Darren.bonus(4)
p David.bonus(3)


