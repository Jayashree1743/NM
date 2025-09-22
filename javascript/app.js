/**
 * ========================================
 * ROBOT TODO APPLICATION - JAVASCRIPT
 * ========================================
 * Clean, organized JavaScript with robot-style functionality
 */

// ========================================
// GLOBAL VARIABLES
// ========================================
let todoArray = [];
let todoCounter = 0;

// ========================================
// USER AUTHENTICATION FUNCTIONS
// ========================================

/**
 * Validates user login credentials
 */
function printdata() {
    const user = document.getElementById('uname').value;
    const pass = document.getElementById('pass').value;

    if (user && pass) {
        // Robot-style success message
        alert(`🤖 SYSTEM ACCESS GRANTED: Welcome, ${user}! Login successful.`);

        // Clear form fields
        document.getElementById('uname').value = "";
        document.getElementById('pass').value = "";

        // Reset feedback messages
        document.getElementById('pid1').innerHTML = "✅ Authenticated";
        document.getElementById('pid2').innerHTML = "✅ Verified";
    } else {
        alert("🚫 ACCESS DENIED: Please enter both username and password.");
    }
}

/**
 * Real-time username validation
 */
function checkuser() {
    const user = document.getElementById('uname').value;
    const feedback = document.getElementById('pid1');

    if (user.length > 6) {
        feedback.innerHTML = "✅ Username Valid";
        feedback.className = "feedback success";
    } else if (user.length > 0) {
        feedback.innerHTML = "⚠️ Username must be at least 7 characters";
        feedback.className = "feedback error";
    } else {
        feedback.innerHTML = "🤖 Enter username...";
        feedback.className = "feedback";
    }
}

/**
 * Real-time password validation
 */
function checkpass() {
    const pass = document.getElementById('pass').value;
    const feedback = document.getElementById('pid2');

    if (pass.length > 5) {
        feedback.innerHTML = "🔒 Strong Password";
        feedback.className = "feedback success";
    } else if (pass.length > 0) {
        feedback.innerHTML = "⚠️ Password must be at least 6 characters";
        feedback.className = "feedback error";
    } else {
        feedback.innerHTML = "🤖 Enter password...";
        feedback.className = "feedback";
    }
}

// ========================================
// TODO LIST FUNCTIONS
// ========================================

/**
 * Adds a new todo item to the list with enhanced validation
 */
function todoList() {
    const todoInput = document.getElementById('todo');
    const todoText = todoInput.value.trim();

    // Enhanced validation
    if (!todoText) {
        showRobotNotification("🚫 ERROR: Please enter a todo item!", 'error');
        return;
    }

    if (todoText.length > 100) {
        showRobotNotification("🚫 ERROR: Todo item too long (max 100 characters)!", 'error');
        return;
    }

    // Add to array with enhanced robot-style ID
    const todoItem = {
        id: ++todoCounter,
        text: todoText,
        completed: false,
        priority: 'normal',
        category: 'general',
        timestamp: new Date().toLocaleString(),
        createdAt: Date.now()
    };

    todoArray.push(todoItem);

    // Clear input with animation
    todoInput.value = "";
    todoInput.style.transform = 'scale(0.95)';
    setTimeout(() => {
        todoInput.style.transform = 'scale(1)';
    }, 150);

    // Update display
    displayTodos();

    // Enhanced robot success message
    showRobotNotification(`✅ Task #${todoItem.id} added to mission queue!`, 'success');
    console.log(`🤖 TODO ADDED: Item #${todoItem.id} - "${todoText}"`);
}

/**
 * Displays all todo items in enhanced robot-style format
 */
function displayTodos() {
    const resultDiv = document.getElementById('result');

    if (!resultDiv) {
        console.error('🚫 Result display element not found');
        return;
    }

    if (todoArray.length === 0) {
        resultDiv.innerHTML = `
            <div style="text-align: center; color: var(--robot-glow); font-style: italic; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem; animation: robotPulse 2s infinite;">🤖</div>
                <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">No active missions in database</div>
                <div style="font-size: 0.9rem; opacity: 0.7;">Add a task to begin your robot mission planning</div>
            </div>
        `;
        return;
    }

    // Sort todos: pending first, then completed
    const sortedTodos = [...todoArray].sort((a, b) => {
        if (a.completed === b.completed) return b.createdAt - a.createdAt;
        return a.completed ? 1 : -1;
    });

    let todoHTML = '<div class="todo-items-container">';

    sortedTodos.forEach((todo, originalIndex) => {
        const actualIndex = todoArray.findIndex(t => t.id === todo.id);
        const statusIcon = todo.completed ? '✅' : '⚡';
        const statusText = todo.completed ? 'MISSION COMPLETE' : 'ACTIVE MISSION';
        const itemBg = todo.completed ? 'rgba(57, 255, 20, 0.15)' : 'rgba(0, 212, 255, 0.15)';
        const borderColor = todo.completed ? 'var(--robot-accent)' : 'var(--robot-primary)';

        todoHTML += `
            <div class="robot-todo-item" style="
                background: ${itemBg};
                border: 2px solid ${borderColor};
                border-radius: var(--robot-border-radius);
                padding: 1.5rem;
                margin: 1rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: var(--robot-transition);
                position: relative;
                overflow: hidden;
                ${todo.completed ? 'opacity: 0.8;' : ''}
            " 
            onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='var(--robot-glow-effect)'" 
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                
                ${!todo.completed ? '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--robot-glow); animation: robotScan 3s infinite;"></div>' : ''}
                
                <div class="todo-content" style="flex: 1; margin-right: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.8rem;">
                        <span style="font-size: 1.5rem;">${statusIcon}</span>
                        <div>
                            <strong style="color: ${borderColor}; font-size: 1.1rem;">TASK #${todo.id}</strong>
                            <div style="
                                background: ${borderColor};
                                color: var(--robot-dark);
                                padding: 0.2rem 0.8rem;
                                border-radius: 12px;
                                font-size: 0.7rem;
                                font-weight: bold;
                                display: inline-block;
                                margin-left: 1rem;
                                text-transform: uppercase;
                            ">${statusText}</div>
                        </div>
                    </div>
                    
                    <div style="
                        font-size: 1.1rem; 
                        margin-bottom: 0.8rem;
                        line-height: 1.4;
                        ${todo.completed ? 'text-decoration: line-through; opacity: 0.7;' : ''}
                    ">
                        ${todo.text}
                    </div>
                    
                    <div style="
                        font-size: 0.8rem; 
                        color: var(--robot-glow); 
                        opacity: 0.8;
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                    ">
                        <span>📅 ${todo.timestamp}</span>
                        <span>🏷️ ${todo.category.toUpperCase()}</span>
                        <span>⚡ ${todo.priority.toUpperCase()}</span>
                    </div>
                </div>
                
                <div class="todo-actions" style="display: flex; gap: 0.5rem; flex-direction: column;">
                    <button onclick="toggleTodo(${actualIndex})" style="
                        background: ${todo.completed ? 'var(--robot-gradient-primary)' : 'var(--robot-gradient-secondary)'};
                        border: 2px solid ${todo.completed ? 'var(--robot-primary)' : 'var(--robot-secondary)'};
                        border-radius: var(--robot-border-radius);
                        color: var(--robot-light);
                        padding: 0.6rem 1.2rem;
                        cursor: pointer;
                        font-size: 0.8rem;
                        font-weight: bold;
                        transition: var(--robot-transition);
                        text-transform: uppercase;
                        min-width: 100px;
                    " 
                    onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 15px ${todo.completed ? 'var(--robot-primary)' : 'var(--robot-secondary)'}'" 
                    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        ${todo.completed ? '🔄 Reopen' : '✅ Complete'}
                    </button>
                    
                    <button onclick="deleteTodo(${actualIndex})" style="
                        background: linear-gradient(135deg, #ff4444, #cc0000);
                        border: 2px solid #ff4444;
                        border-radius: var(--robot-border-radius);
                        color: var(--robot-light);
                        padding: 0.6rem 1.2rem;
                        cursor: pointer;
                        font-size: 0.8rem;
                        font-weight: bold;
                        transition: var(--robot-transition);
                        text-transform: uppercase;
                        min-width: 100px;
                    " 
                    onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 15px #ff4444'" 
                    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;
    });

    todoHTML += '</div>';

    // Enhanced statistics panel
    const totalTasks = todoArray.length;
    const completedTasks = todoArray.filter(t => t.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    todoHTML += `
        <div style="
            background: var(--robot-gradient-dark);
            border: 2px solid var(--robot-glow);
            border-radius: var(--robot-border-radius);
            padding: 2rem;
            margin-top: 2rem;
            position: relative;
            overflow: hidden;
        ">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--robot-glow); animation: robotScan 4s infinite;"></div>
            
            <h4 style="
                color: var(--robot-glow); 
                margin-bottom: 1.5rem; 
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 1.2rem;
            ">📊 MISSION CONTROL DASHBOARD</h4>
            
            <div style="
                display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
                gap: 1.5rem;
                text-align: center;
            ">
                <div style="
                    background: rgba(0, 212, 255, 0.1);
                    padding: 1rem;
                    border-radius: var(--robot-border-radius);
                    border: 1px solid var(--robot-primary);
                ">
                    <div style="font-size: 2rem; color: var(--robot-primary); font-weight: bold;">${totalTasks}</div>
                    <div style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Total Missions</div>
                </div>
                
                <div style="
                    background: rgba(57, 255, 20, 0.1);
                    padding: 1rem;
                    border-radius: var(--robot-border-radius);
                    border: 1px solid var(--robot-accent);
                ">
                    <div style="font-size: 2rem; color: var(--robot-accent); font-weight: bold;">${completedTasks}</div>
                    <div style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Completed</div>
                </div>
                
                <div style="
                    background: rgba(255, 107, 53, 0.1);
                    padding: 1rem;
                    border-radius: var(--robot-border-radius);
                    border: 1px solid var(--robot-secondary);
                ">
                    <div style="font-size: 2rem; color: var(--robot-secondary); font-weight: bold;">${activeTasks}</div>
                    <div style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Active</div>
                </div>
                
                <div style="
                    background: rgba(0, 255, 255, 0.1);
                    padding: 1rem;
                    border-radius: var(--robot-border-radius);
                    border: 1px solid var(--robot-glow);
                ">
                    <div style="font-size: 2rem; color: var(--robot-glow); font-weight: bold;">${completionRate}%</div>
                    <div style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Progress</div>
                </div>
            </div>
            
            ${completionRate === 100 && totalTasks > 0 ? `
                <div style="
                    margin-top: 1.5rem;
                    text-align: center;
                    color: var(--robot-accent);
                    font-size: 1.1rem;
                    font-weight: bold;
                    animation: robotPulse 1s infinite;
                ">
                    🎉 ALL MISSIONS COMPLETED! EXCELLENT WORK, AGENT! 🎉
                </div>
            ` : ''}
        </div>
    `;

    resultDiv.innerHTML = todoHTML;
}

/**
 * Toggles todo completion status
 */
function toggleTodo(index) {
    if (todoArray[index]) {
        todoArray[index].completed = !todoArray[index].completed;
        displayTodos();
        console.log(`🤖 TODO UPDATED: Task #${todoArray[index].id} marked as ${todoArray[index].completed ? 'completed' : 'pending'}`);
    }
}

/**
 * Deletes a todo item with confirmation
 */
function deleteTodo(index) {
    if (todoArray[index]) {
        const todoItem = todoArray[index];

        if (confirm(`🤖 CONFIRM MISSION TERMINATION\n\nTask #${todoItem.id}: "${todoItem.text}"\n\nThis action cannot be undone. Proceed?`)) {
            const deletedTodo = todoArray.splice(index, 1)[0];
            displayTodos();
            showRobotNotification(`🗑️ Task #${deletedTodo.id} terminated from system!`, 'success');
            console.log(`🤖 TODO DELETED: Task #${deletedTodo.id} - "${deletedTodo.text}" removed from system`);
        }
    }
}

// ========================================
// ENHANCED UTILITY FUNCTIONS
// ========================================

/**
 * Show robot-style notifications
 */
function showRobotNotification(message, type = 'info') {
    const notificationStyles = {
        info: 'background: var(--robot-gradient-primary); color: var(--robot-dark); border-color: var(--robot-primary);',
        success: 'background: var(--robot-gradient-primary); color: var(--robot-dark); border-color: var(--robot-accent);',
        error: 'background: var(--robot-gradient-secondary); color: var(--robot-light); border-color: var(--robot-secondary);',
        warning: 'background: linear-gradient(135deg, #ffaa00, #ff8800); color: var(--robot-dark); border-color: #ffaa00;'
    };

    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.robot-notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'robot-notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 1.2rem;">${type === 'error' ? '🚫' : type === 'success' ? '✅' : type === 'warning' ? '⚠️' : '🤖'}</span>
            <span>${message}</span>
        </div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        ${notificationStyles[type]}
        padding: 1rem 2rem;
        border-radius: var(--robot-border-radius);
        border: 2px solid;
        box-shadow: var(--robot-glow-effect);
        z-index: 10000;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 0.9rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        cursor: pointer;
    `;

    // Add click to dismiss
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

/**
 * Clear all completed todos
 */
function clearCompleted() {
    const completedCount = todoArray.filter(t => t.completed).length;

    if (completedCount === 0) {
        showRobotNotification('🤖 No completed tasks to clear!', 'info');
        return;
    }

    if (confirm(`🤖 CLEAR COMPLETED MISSIONS\n\nThis will remove ${completedCount} completed task(s).\n\nProceed with cleanup?`)) {
        todoArray = todoArray.filter(t => !t.completed);
        displayTodos();
        showRobotNotification(`🧹 ${completedCount} completed task(s) cleared from system!`, 'success');
        console.log(`🤖 CLEANUP: ${completedCount} completed tasks removed`);
    }
}

/**
 * Mark all todos as completed
 */
function completeAll() {
    const pendingTasks = todoArray.filter(t => !t.completed);

    if (pendingTasks.length === 0) {
        showRobotNotification('🤖 All tasks already completed!', 'info');
        return;
    }

    if (confirm(`🤖 COMPLETE ALL MISSIONS\n\nThis will mark ${pendingTasks.length} task(s) as completed.\n\nProceed?`)) {
        todoArray.forEach(todo => todo.completed = true);
        displayTodos();
        showRobotNotification(`🎉 All ${pendingTasks.length} task(s) marked as completed!`, 'success');
        console.log(`🤖 MASS COMPLETION: ${pendingTasks.length} tasks completed`);
    }
}

// ========================================
// ROBOT SYSTEM INITIALIZATION
// ========================================

/**
 * Initialize the enhanced robot system when page loads
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('🤖 ROBOT CONTROL SYSTEM v2.0 INITIALIZING...');

    // Add CSS animations for notifications
    addRobotAnimations();

    // Enhanced keyboard support
    setupKeyboardControls();

    // Initialize system status
    showRobotNotification('🤖 Robot Control System v2.0 Online!', 'success');

    // Add periodic system status updates
    setInterval(updateSystemTime, 1000);

    console.log('✅ ROBOT SYSTEM FULLY OPERATIONAL');
});

/**
 * Add CSS animations dynamically
 */
function addRobotAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { 
                transform: translateX(100%); 
                opacity: 0; 
            }
            to { 
                transform: translateX(0); 
                opacity: 1; 
            }
        }
        
        @keyframes slideOutRight {
            from { 
                transform: translateX(0); 
                opacity: 1; 
            }
            to { 
                transform: translateX(100%); 
                opacity: 0; 
            }
        }
        
        @keyframes robotPulse {
            0%, 100% { 
                transform: scale(1);
                box-shadow: 0 0 5px var(--robot-primary); 
            }
            50% { 
                transform: scale(1.05);
                box-shadow: 0 0 20px var(--robot-primary), 0 0 30px var(--robot-glow); 
            }
        }
        
        @keyframes robotScan {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
        }
        
        .robot-notification {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .robot-notification:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Setup enhanced keyboard controls
 */
function setupKeyboardControls() {
    // Todo input controls
    const todoInput = document.getElementById('todo');
    if (todoInput) {
        todoInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                todoList();
            }
        });

        // Add input validation feedback
        todoInput.addEventListener('input', function (e) {
            const length = e.target.value.length;
            const maxLength = 100;

            if (length > maxLength * 0.8) {
                e.target.style.borderColor = 'var(--robot-secondary)';
            } else {
                e.target.style.borderColor = 'var(--robot-primary)';
            }
        });
    }

    // Login input controls
    const passInput = document.getElementById('pass');
    if (passInput) {
        passInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                printdata();
            }
        });
    }

    const userInput = document.getElementById('uname');
    if (userInput) {
        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                document.getElementById('pass').focus();
            }
        });
    }

    // Global keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + Enter to add todo from anywhere
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const todoInput = document.getElementById('todo');
            if (todoInput && todoInput.value.trim()) {
                todoList();
            }
        }

        // Escape to clear current input
        if (e.key === 'Escape') {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.tagName === 'INPUT') {
                activeElement.value = '';
                activeElement.blur();
            }
        }
    });
}

/**
 * Update system time display
 */
function updateSystemTime() {
    const timeElements = document.querySelectorAll('.system-time');
    const currentTime = new Date().toLocaleTimeString();

    timeElements.forEach(element => {
        element.textContent = currentTime;
    });
}